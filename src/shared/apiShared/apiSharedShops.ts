import { axiosBaseWrap } from "../../configs/api";
import { ShopCategory } from "../interfaces/Shop";

export const apiSharedShops = {
  getAllShopsCategories(): Promise<ShopCategory[]> {
    return axiosBaseWrap
      .get("/shop_categories")
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
};
