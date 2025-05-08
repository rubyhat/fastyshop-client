import { useAxiosQuery } from "../../../configs/useAxiosQuery";
import { apiSellerModule } from "../api";

export const useGetAllLegalProfilesOfUserQuery = () => {
  return useAxiosQuery({
    queryFn: () => apiSellerModule.getAllLegalProfilesOfUser(),
    queryKey: ["get-all-legal-profiles-of-user"],
    retry: false,
  });
};
