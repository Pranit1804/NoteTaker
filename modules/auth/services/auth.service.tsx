import { createMMKV } from "react-native-mmkv";

const storage = createMMKV();

const USERNAME_KEY = "username";

export const setUsername = (username: string): void => {
  storage.set(USERNAME_KEY, username);
};

export const getUsername = (): string | undefined => {
  return storage.getString(USERNAME_KEY);
};

export const removeUsername = (): void => {
  storage.remove(USERNAME_KEY);
};
