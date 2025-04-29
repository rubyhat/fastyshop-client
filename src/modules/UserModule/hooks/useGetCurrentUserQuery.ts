import { useAxiosQuery } from "../../../configs/useAxiosQuery";
import { apiUserModule } from "../api";

export const useGetCurrentUserQuery = () => {
  return useAxiosQuery({
    queryFn: () => apiUserModule.getCurrentUser(),
    queryKey: ["get-current-user"],
  });
};
