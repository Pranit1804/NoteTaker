import * as SQLite from "expo-sqlite";
import { Note } from "../models/notes_model";

const db = SQLite.openDatabaseSync("notetaker.db");

export const notesService = {
  // private dbPromise: Promise<SQLite.SQLiteDatabase>;

  // constructor() {
  //   this.dbPromise = SQLite.openDatabaseAsync("notetaker.db");
  // }

  async getAllNotes(): Promise<Note[]> {
    try {
      const result = await db.getAllAsync(`SELECT * FROM notes`);
      return result as Note[];
    } catch (error) {
      throw error;
    }
  },

  async getNoteById(id: number): Promise<Note | null> {
    try {
      return await db.getFirstAsync(`SELECT * FROM notes where id=${id}`);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  async storeNote(note: Note): Promise<void> {
    try {
      const result = await db.runAsync(
        `INSERT INTO notes (title, content, createdAt, updatedAt) VALUES (?, ?, ?, ?)`,
        note.title,
        note.content,
        note.createdAt,
        note.updatedAt
      );
    } catch (error) {
      console.log(error);
    }
  },

  async updateNoteById(id: number, note: Note) {
    try {
      await db.runAsync(
        `UPDATE notes SET title = ?, content = ?, updatedAt = ? WHERE id = ?`,
        note.title,
        note.content,
        Date.now(),
        id
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  async deleteNoteById(id: number) {
    try {
      await db.runAsync(`DELETE FROM notes WHERE id = ?`, id);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
