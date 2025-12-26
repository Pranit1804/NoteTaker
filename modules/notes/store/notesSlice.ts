import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note } from "../models/notes_model";
import {
  addNoteThunk,
  deleteNoteByIdThunk,
  fetchNotesThunk,
  getNoteByIdThunk,
  updateNoteById,
} from "./notesThunks";

export interface NotesState {
  notes: Note[];
  loading: boolean;
  note?: Note;
}

const initialState: NotesState = {
  notes: [],
  loading: false,
  note: undefined,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNotesThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchNotesThunk.fulfilled,
      (state, action: PayloadAction<Note[]>) => {
        state.notes = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(
      addNoteThunk.fulfilled,
      (state, action: PayloadAction<Note>) => {
        state.notes.push(action.payload);
        state.loading = false;
      }
    );
    builder.addCase(getNoteByIdThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getNoteByIdThunk.fulfilled,
      (state, action: PayloadAction<Note | null>) => {
        console.log(action.payload);
        state.note = action.payload === null ? undefined : action.payload;
        state.loading = false;
      }
    );
    builder.addCase(updateNoteById.fulfilled, (_, __) => {});
    builder.addCase(
      deleteNoteByIdThunk.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.notes.filter((note) => note.id !== action.payload);
      }
    );
  },
});

export default notesSlice.reducer;
