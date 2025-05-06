import { axiosBaseWrap } from "../../configs/api";
import { ShopCategory, ShopData } from "../interfaces/Shop";

export const apiSharedShops = {
  getAllShopsOfUser(): Promise<ShopData[]> {
    return axiosBaseWrap
      .get("/shops")
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
  getAllShopsCategories(): Promise<ShopCategory[]> {
    return axiosBaseWrap
      .get("/shop_categories")
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
};
