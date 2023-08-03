import { useEffect } from "react";
import * as userLocalStorage from "./user.localstore";

export function useUser() {
  const user = userLocalStorage.getUser();
  useEffect(() => {
    if (!user) userLocalStorage.removeUser();
    else userLocalStorage.saveUser(user);
  }, [user]);

  return {
    user: user ?? null,
  };
}
