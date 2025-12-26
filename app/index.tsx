import { useAppSelector } from "@/store/hooks";
import { Redirect } from "expo-router";

export default function Index() {
  const username = useAppSelector((state) => state.user.username);

  if (username) {
    return <Redirect href="/home" />;
  }

  return <Redirect href="/auth/login" />;
}
