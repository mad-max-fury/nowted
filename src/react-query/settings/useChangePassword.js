import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import { QUERY_KEY } from "../../constants/queryKeys";
import { ResponseError } from "../../utils/Errors/ResponseError";
import nowtedAxiosInstance from "../nowtedAxiosInstance";

async function updateUserPassword(creds) {
  const response = await nowtedAxiosInstance.patch(
    "users/updatePassword",
    creds
  );
  if (response.status === 200) {
    return response.data;
  } else {
    throw new ResponseError("Failed updating password", response);
  }
}

export function useUpdateUserPassword() {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const updateUserPasswordMutation = useMutation(
    async (creds) => {
      try {
        return await updateUserPassword(creds);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(QUERY_KEY.profile);
        enqueueSnackbar("Password changed successfully", {
          variant: "success",
        });
      },
      onError: (error) => {
        enqueueSnackbar(error?.response?.data?.message, {
          variant: "error",
        });
      },
    }
  );

  return updateUserPasswordMutation;
}
