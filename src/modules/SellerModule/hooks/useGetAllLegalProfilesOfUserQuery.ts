import { useAxiosQuery } from "../../../configs/useAxiosQuery";
import { useUserProfile } from "../../../shared/permissions/hooks";
import { apiSellerModule } from "../api";

export const useGetAllLegalProfilesOfUserQuery = () => {
  const profile = useUserProfile();
  return useAxiosQuery({
    queryFn: () => apiSellerModule.getAllLegalProfilesOfUser(),
    queryKey: ["get-all-legal-profiles-of-user", profile?.id],
    retry: false,
  });
};
