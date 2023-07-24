import { useMutation } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { ResponseError } from "../../utils/Errors/ResponseError";
import nowtedAxiosInstance from "../nowtedAxiosInstance";
async function resetPassword(creds, resetToken) {
  const response = await nowtedAxiosInstance.patch(
    `users/resetPassword/${resetToken}`,
    creds
  );
  if (response.status === 200) {
    return response.data;
  } else {
    throw new ResponseError("Failed to reset request", response);
  }
}

export function useResetPassword() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const resetPasswordMutation = useMutation(
    ({ creds, resetToken }) => resetPassword(creds, resetToken),
    {
      onSuccess: (data) => {
        enqueueSnackbar("Password resetted successfully, Log in", {
          variant: "success",
        });
        navigate("/");
      },
      onError: (error) => {
        enqueueSnackbar(error.response.data.message, {
          variant: "error",
        });
      },
    }
  );

  return resetPasswordMutation;
}
