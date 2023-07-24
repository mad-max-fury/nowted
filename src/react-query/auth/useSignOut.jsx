import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { QUERY_KEY } from "../../constants/queryKeys";

export function useSignOut() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const onSignOut = useCallback(() => {
    queryClient.setQueryData([QUERY_KEY.user], null);
    navigate("/auth/sign-in");
  }, [navigate, queryClient]);

  return onSignOut;
}
