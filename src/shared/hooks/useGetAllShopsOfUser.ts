import { useAxiosQuery } from "../../configs/useAxiosQuery";
import { apiSharedShops } from "../apiShared";

export const useGetAllShopsOfUser = () => {
  return useAxiosQuery({
    queryFn: () => apiSharedShops.getAllShopsOfUser(),
    queryKey: ["get-all-shops-of-user"],
  });
};
