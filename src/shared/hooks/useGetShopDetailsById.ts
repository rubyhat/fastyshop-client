import { useAxiosQuery } from "../../configs/useAxiosQuery";
import { apiSharedShops } from "../apiShared";

export const useGetShopDetailsById = (id: string | undefined) => {
  return useAxiosQuery({
    queryFn: () => apiSharedShops.getShopDetailsById(id as string),
    queryKey: ["get-shop-by-id", id],
    enabled: Boolean(id),
  });
};
