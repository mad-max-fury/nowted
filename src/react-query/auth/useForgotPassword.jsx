import { useMutation } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import { ResponseError } from "../../utils/Errors/ResponseError";
import nowtedAxiosInstance from "../nowtedAxiosInstance";

async function forgotPassword(creds) {
  const response = await nowtedAxiosInstance.post(
    "users/forgotPassword",
    creds
  );

  if (response.status === 200) {
    return response.data; // Return the data property of the response
  } else {
    throw new ResponseError("Failed on sign in request", response);
  }
}

export function useForgotPassword() {
  const { enqueueSnackbar } = useSnackbar();
  const forgotPasswordMutation = useMutation((creds) => forgotPassword(creds), {
    onSuccess: (data) => {
      enqueueSnackbar(data?.message, {
        variant: "success",
      });
    },
    onError: (error) => {
      enqueueSnackbar(error?.response?.data?.message, {
        variant: "error",
      });
    },
  });

  return forgotPasswordMutation;
}
