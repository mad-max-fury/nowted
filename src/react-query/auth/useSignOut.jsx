import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import { QUERY_KEY } from "../../constants/queryKeys";
import { ResponseError } from "../../utils/Errors/ResponseError";
import nowtedAxiosInstance from "../nowtedAxiosInstance";
import { getUser } from "./user.localstore";

async function signOut() {
  const user = getUser();
  console.log(user);
  const response = await nowtedAxiosInstance.get("users/logout", {
    headers: {
      Authorization: "Bearer " + user?.data.token,
    },
  });
  if (response.status === 200) {
    return response.data;
  } else {
    throw new ResponseError("Failed on sign out request", response);
  }
}

export function useSignOut() {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  const signOutQuery = useQuery([QUERY_KEY.signOut], signOut, {
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEY.user], null);
      enqueueSnackbar("See you later!", {
        variant: "success",
      });
    },
    onError: (error) => {
      enqueueSnackbar(error.response.data.message, {
        variant: "error",
      });
    },
    enabled: false,
  });

  return signOutQuery;
}
