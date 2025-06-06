import { ShopFormData } from "../validations";
import { axiosBaseWrap } from "../../../configs/api";
import { ShopData } from "../../../shared/interfaces/Shop";

export const apiShopFormModule = {
  postShop(data: ShopFormData): Promise<ShopData> {
    return axiosBaseWrap
      .post("/shops", data)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
  patchShop(data: Partial<ShopFormData>, id: string): Promise<ShopData> {
    return axiosBaseWrap
      .patch("/shops/" + id, data)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
};
