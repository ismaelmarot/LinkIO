const initSqlJs = require('sql.js');
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../../data/linkio.db');

let db;

const initDb = async () => {
  const SQL = await initSqlJs();
  
  if (fs.existsSync(dbPath)) {
    const buffer = fs.readFileSync(dbPath);
    db = new SQL.Database(buffer);
  } else {
    db = new SQL.Database();
  }
  
  db.run(`
    CREATE TABLE IF NOT EXISTS links (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      url TEXT NOT NULL,
      title TEXT,
      subtitle TEXT,
      description TEXT,
      imageUrl TEXT,
      iconUrl TEXT,
      note TEXT,
      tags TEXT,
      createdAt TEXT DEFAULT (datetime('now'))
    )
  `);
  
  saveDb();
  return db;
};

const saveDb = () => {
  if (!db) return;
  const data = db.export();
  const buffer = Buffer.from(data);
  const dir = path.dirname(dbPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(dbPath, buffer);
};

const getDb = () => db;

module.exports = { initDb, getDb, saveDb };