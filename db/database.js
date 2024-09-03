// database.js
import sqlite3 from 'better-sqlite3';

const db = sqlite3('my-database.db', { verbose: console.log });

// Cria uma tabela se não existir
db.exec(`
  CREATE TABLE IF NOT EXISTS devices (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    hostname TEXT NOT NULL,
    passwd TEXT NOT NULL,
    ipv4 TEXT,
    ipv6 TEXT
  );
`);

export default db;
