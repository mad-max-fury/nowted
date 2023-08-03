import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { QUERY_KEY } from "../../constants/queryKeys";
import { ResponseError } from "../../utils/Errors/ResponseError";
import nowtedAxiosInstance from "../nowtedAxiosInstance";
async function signUp(creds) {
  const response = await nowtedAxiosInstance.post("users/signUp", creds);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new ResponseError("Failed on sign up request", response);
  }
}

export function useSignUp() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const signUpMutation = useMutation((creds) => signUp(creds), {
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEY.user], null);
      enqueueSnackbar("Account created successfully, Log in", {
        variant: "success",
      });
      navigate("/");
    },
    onError: (error) => {
      enqueueSnackbar(error.response.data.message, {
        variant: "error",
      });
    },
  });

  return signUpMutation;
}
