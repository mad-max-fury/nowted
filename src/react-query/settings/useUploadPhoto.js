import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import { QUERY_KEY } from "../../constants/queryKeys";
import { ResponseError } from "../../utils/Errors/ResponseError";
import nowtedAxiosInstance from "../nowtedAxiosInstance";

async function uploadPhoto(creds) {
  const formData = new FormData();
  for (const key in creds) {
    formData.append(key, creds[key]);
  }

  try {
    const response = await nowtedAxiosInstance.patch(
      "users/updateProfile",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new ResponseError("Failed to upload photo", response);
    }
  } catch (error) {
    throw new ResponseError("Failed to upload photo", error);
  }
}

export function useUploadPhoto() {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  const uploadPhotoMutation = useMutation((creds) => uploadPhoto(creds), {
    onSuccess: (data) => {
      queryClient.invalidateQueries(QUERY_KEY.profile);
      enqueueSnackbar("photo updated", {
        variant: "success",
      });
    },
    onError: (error) => {
      const errorMessage = "An error occurred. Please try again later.";
      enqueueSnackbar(errorMessage, {
        variant: "error",
      });
    },
  });

  return uploadPhotoMutation;
}
