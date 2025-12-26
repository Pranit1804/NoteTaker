import { Note } from "@/modules/notes/models/notes_model";
import { createSlice } from "@reduxjs/toolkit";

interface HomeState {
  notes: Note[];
}

const initialState: HomeState = {
  notes: [],
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getAllNotes: (state) => {
      state.notes = [];
    },
  },
});
