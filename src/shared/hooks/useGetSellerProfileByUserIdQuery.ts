import { useAxiosQuery } from "../../configs/useAxiosQuery";
import { apiSharedSellerProfiles } from "../apiShared";

export const useGetSellerProfileByUserIdQuery = (
  user_id: string | undefined,
) => {
  return useAxiosQuery({
    queryFn: () =>
      apiSharedSellerProfiles.getSellerProfileByUserId(user_id as string),
    queryKey: ["get-seller-profile-by-user-id", user_id],
    enabled: !!user_id,
  });
};
