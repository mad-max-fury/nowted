import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import { QUERY_KEY } from "../../constants/queryKeys";
import { ResponseError } from "../../utils/Errors/ResponseError";
import nowtedAxiosInstance from "../nowtedAxiosInstance";
async function updateUserInfo(creds) {
  const response = await nowtedAxiosInstance.patch(
    "users/updateProfile",
    creds
  );
  if (response.status === 200) {
    return response.data;
  } else {
    throw new ResponseError("Failed updating", response);
  }
}

export function useUpdateUserInfo() {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const updateUserInfoMutation = useMutation((creds) => updateUserInfo(creds), {
    onSuccess: (data) => {
      queryClient.invalidateQueries(QUERY_KEY.profile);
      enqueueSnackbar("details updated", {
        variant: "success",
      });
    },
    onError: (error) => {
      enqueueSnackbar(error.response.data.message, {
        variant: "error",
      });
    },
  });

  return updateUserInfoMutation;
}
