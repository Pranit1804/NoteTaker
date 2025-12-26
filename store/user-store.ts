import { getUsername, setUsername } from "@/modules/auth/services/auth.service";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  username: string;
}

const initialState: UserState = {
  username: getUsername() ?? "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
      setUsername(state.username);
    },
    clearUserName: (state) => {
      state.username = "";
    },
  },
});

export const { setUserName, clearUserName } = userSlice.actions;
export default userSlice.reducer;
