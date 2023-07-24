import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { QUERY_KEY } from "../../constants/queryKeys";
import { ResponseError } from "../../utils/Errors/ResponseError";
import nowtedAxiosInstance from "../nowtedAxiosInstance";

async function signIn(creds) {
  const response = await nowtedAxiosInstance.post("users/login", creds);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new ResponseError("Failed on sign in request", response);
  }
}

export function useSignIn() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const signInMutation = useMutation((creds) => signIn(creds), {
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEY.user], data);
      console.log(data);
      navigate("/dashboard");
      enqueueSnackbar(data.message, {
        variant: "success",
      });
    },
    onError: (error) => {
      enqueueSnackbar(error.response.data.message, {
        variant: "error",
      });
    },
  });

  return signInMutation;
}
