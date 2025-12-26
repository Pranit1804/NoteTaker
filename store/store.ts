import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "../modules/notes/store/notesSlice";
import userReducer from "./user-store";

export const store = configureStore({
  reducer: {
    user: userReducer,
    note: noteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
