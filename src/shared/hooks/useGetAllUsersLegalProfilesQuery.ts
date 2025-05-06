import { useAxiosQuery } from "../../configs/useAxiosQuery";
import { apiSharedLegalProfiles } from "../apiShared";

export const useGetAllUsersLegalProfilesQuery = (
  user_id: string | undefined,
  enabled: boolean = true,
) => {
  return useAxiosQuery({
    queryFn: () => apiSharedLegalProfiles.getAllUsersLegalProfiles(),
    queryKey: ["get-all-users-legal-profiles", user_id && user_id],
    enabled: !!user_id && enabled,
  });
};
