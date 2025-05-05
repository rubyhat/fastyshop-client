import { axiosBaseWrap } from "../../configs/api";
import { SellerProfileResponseData } from "../interfaces";

export const apiSharedSellerProfiles = {
  getSellerProfileByUserId(
    user_id: string,
  ): Promise<SellerProfileResponseData> {
    return axiosBaseWrap
      .get("/users/" + user_id + "/seller_profile")
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
};
