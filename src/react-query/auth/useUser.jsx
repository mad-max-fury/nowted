import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { ResponseError } from "../../utils/Errors/ResponseError";
import * as userLocalStorage from "./user.localstore";
import { QUERY_KEY } from "../../constants/queryKeys";

async function getUser(user) {
  if (!user) return null;
  const response = await fetch(`/api/users/${user.user.id}`, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
  if (!response.ok) {
    throw new ResponseError("Failed on get user request", response);
  }

  return await response.json();
}

export function useUser() {
  const { data: user } = useQuery([QUERY_KEY.user], async () => getUser(user), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    initialData: userLocalStorage.getUser(),
    onError: () => {
      userLocalStorage.removeUser();
    },
  });

  useEffect(() => {
    if (!user) userLocalStorage.removeUser();
    else userLocalStorage.saveUser(user);
  }, [user]);

  return {
    user: user ?? null,
  };
}
