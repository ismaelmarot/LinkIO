const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../../data');
const dataPath = path.join(dataDir, 'links.json');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, JSON.stringify([]));
}

const load = () => {
  try {
    const data = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
};

const save = (links) => {
  fs.writeFileSync(dataPath, JSON.stringify(links, null, 2));
};

module.exports = { load, save };