import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import { QUERY_KEY } from "../../constants/queryKeys";
import { ResponseError } from "../../utils/Errors/ResponseError";
import nowtedAxiosInstance from "../nowtedAxiosInstance";

async function getMe() {
  const response = await nowtedAxiosInstance.get("users/user");
  if (response.status === 200) {
    return response.data;
  } else {
    throw new ResponseError("Failed on get profile request", response);
  }
}

export function useGetMe() {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  const getMeQuery = useQuery([QUERY_KEY.profile], getMe, {
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEY.profile], data);
    },
    onError: (error) => {
      enqueueSnackbar(error?.response.data.message, {
        variant: "error",
      });
    },
    enabled: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return getMeQuery;
}
