import { useAxiosQuery } from "../../../configs/useAxiosQuery";
import { apiUserModule } from "../api";

export const useGetCurrentUserQuery = (enabled: boolean) => {
  return useAxiosQuery({
    queryFn: () => apiUserModule.getCurrentUser(),
    queryKey: ["get-current-user"],
    enabled: enabled,
  });
};
