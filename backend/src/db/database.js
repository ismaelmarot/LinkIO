const initSqlJs = require('sql.js');
const fs = require('fs');
const path = require('path');
const { app } = require('electron');

let db = null;
let dbPath = null;

function getDbPath() {
  if (!dbPath) {
    const userDataPath = app.getPath('userData');
    dbPath = path.join(userDataPath, 'linkio.db');
  }
  return dbPath;
}

function saveDb() {
  if (!db) return;
  const data = db.export();
  const buffer = Buffer.from(data);
  const dir = path.dirname(getDbPath());
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(getDbPath(), buffer);
}

async function initDatabase() {
  const SQL = await initSqlJs();
  
  const filePath = getDbPath();
  if (fs.existsSync(filePath)) {
    const buffer = fs.readFileSync(filePath);
    db = new SQL.Database(buffer);
  } else {
    db = new SQL.Database();
  }
  
  db.run(`
    CREATE TABLE IF NOT EXISTS links (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      url TEXT NOT NULL,
      title TEXT NOT NULL,
      subtitle TEXT DEFAULT '',
      description TEXT DEFAULT '',
      imageUrl TEXT DEFAULT '',
      iconUrl TEXT DEFAULT '',
      note TEXT DEFAULT '',
      tags TEXT DEFAULT '[]',
      createdAt TEXT NOT NULL
    )
  `);
  
  saveDb();
  console.log(`Database initialized at: ${filePath}`);
  return db;
}

function getAllLinks() {
  if (!db) return [];
  const stmt = db.prepare('SELECT * FROM links ORDER BY createdAt DESC');
  const results = [];
  while (stmt.step()) {
    results.push(stmt.getAsObject());
  }
  stmt.free();
  return results;
}

function getLinkById(id) {
  if (!db) return null;
  const stmt = db.prepare('SELECT * FROM links WHERE id = ?');
  stmt.bind([id]);
  let result = null;
  if (stmt.step()) {
    result = stmt.getAsObject();
  }
  stmt.free();
  return result;
}

function createLink(linkData) {
  if (!db) return null;
  
  db.run(`
    INSERT INTO links (url, title, subtitle, description, imageUrl, iconUrl, note, tags, createdAt)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `, [
    linkData.url,
    linkData.title,
    linkData.subtitle || '',
    linkData.description || '',
    linkData.imageUrl || '',
    linkData.iconUrl || '',
    linkData.note || '',
    JSON.stringify(linkData.tags || []),
    new Date().toISOString()
  ]);
  
  const lastId = db.exec('SELECT last_insert_rowid()')[0].values[0][0];
  saveDb();
  
  return getLinkById(lastId);
}

function updateLink(id, updates) {
  if (!db) return null;
  
  const current = getLinkById(id);
  if (!current) return null;
  
  db.run(`
    UPDATE links 
    SET url = ?, title = ?, subtitle = ?, description = ?, imageUrl = ?, iconUrl = ?, note = ?, tags = ?
    WHERE id = ?
  `, [
    updates.url ?? current.url,
    updates.title ?? current.title,
    updates.subtitle ?? current.subtitle,
    updates.description ?? current.description,
    updates.imageUrl ?? current.imageUrl,
    updates.iconUrl ?? current.iconUrl,
    updates.note ?? current.note,
    JSON.stringify(updates.tags ?? JSON.parse(current.tags || '[]')),
    id
  ]);
  
  saveDb();
  return getLinkById(id);
}

function deleteLink(id) {
  if (!db) return false;
  db.run('DELETE FROM links WHERE id = ?', [id]);
  saveDb();
  return true;
}

function closeDatabase() {
  if (db) {
    saveDb();
    db.close();
    db = null;
  }
}

module.exports = {
  initDatabase,
  getAllLinks,
  getLinkById,
  createLink,
  updateLink,
  deleteLink,
  closeDatabase
};