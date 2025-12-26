import * as SQLite from "expo-sqlite";

// Open or create the database
export const db = SQLite.openDatabaseSync("notetaker.db");

// Initialize database tables
export const initializeDatabase = () => {
  try {
    // Create notes table
    db.execSync(`
      CREATE TABLE IF NOT EXISTS notes (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        createdAt INTEGER NOT NULL,
        updatedAt INTEGER NOT NULL
      );
    `);

    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Error initializing database:", error);
    throw error;
  }
};
