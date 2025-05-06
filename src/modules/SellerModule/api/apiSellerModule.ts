import { axiosBaseWrap } from "../../../configs/api";
import { LegalProfileResponseData } from "../../../shared/interfaces";

export const apiSellerModule = {
  getAllLegalProfilesOfUser(): Promise<LegalProfileResponseData[]> {
    return axiosBaseWrap
      .get("/legal_profiles")
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
};
