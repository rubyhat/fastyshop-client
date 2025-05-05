import { useAxiosQuery } from "../../configs/useAxiosQuery";
import { apiSharedShops } from "../apiShared";

export const useGetAllShopsCategoriesQuery = (enabled: boolean = true) => {
  return useAxiosQuery({
    queryFn: () => apiSharedShops.getAllShopsCategories(),
    queryKey: ["get-all-shops-categories"],
    enabled: enabled,
  });
};
