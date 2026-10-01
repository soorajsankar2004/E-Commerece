import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { seedData } from './seedData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_FILE = path.join(__dirname, 'eshop_db.json');

// Initialize database with seed data if file doesn't exist
function initDB() {
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify(seedData, null, 2), 'utf-8');
    console.log('Initialized eshop_db.json with fresh seed data.');
  }
}

initDB();

export function getDB() {
  try {
    const content = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(content);
  } catch (err) {
    console.error('Error reading db file, restoring defaults:', err);
    return seedData;
  }
}

export function saveDB(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error saving db file:', err);
    return false;
  }
}
