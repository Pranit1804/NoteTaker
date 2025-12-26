import { createAsyncThunk } from "@reduxjs/toolkit";
import { Note } from "../models/notes_model";
import { notesService } from "../services/notes.service";

export const fetchNotesThunk = createAsyncThunk<Note[]>(
  "notes/fetchNotes",
  async () => {
    const result = await notesService.getAllNotes();
    return result as Note[];
  }
);

export const updateNoteById = createAsyncThunk<
  void,
  { id: number; note: Note }
>("notes/updateNoteById", async ({ id, note }) => {
  await notesService.updateNoteById(id, note);
});

export const getNoteByIdThunk = createAsyncThunk<Note | null, number>(
  "notes/getNoteById",
  async (id) => {
    return await notesService.getNoteById(id);
  }
);

export const addNoteThunk = createAsyncThunk<Note, Note>(
  "notes/addNote",
  async (note) => {
    await notesService.storeNote(note);
    return note;
  }
);

export const deleteNoteByIdThunk = createAsyncThunk<number, number>(
  "notes/deleteNoteById",
  async (id) => {
    await notesService.deleteNoteById(id);
    return id;
  }
);
