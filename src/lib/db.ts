import { DatabaseSync } from "node:sqlite";
import path from "path";

const dbPath = path.join(process.cwd(), "data", "portfolio.db");

let db: DatabaseSync;

export function getDb() {
  if (!db) {
    db = new DatabaseSync(dbPath);
    db.exec(`
      CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        subject TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }
  return db;
}

export function saveMessage(name: string, email: string, subject: string, message: string) {
  const db = getDb();
  const stmt = db.prepare(
    "INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)"
  );
  stmt.run(name, email, subject, message);
  return { success: true };
}
