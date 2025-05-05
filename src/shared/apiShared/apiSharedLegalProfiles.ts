import { axiosBaseWrap } from "../../configs/api";
import { LegalProfileResponseData } from "../interfaces";

export const apiSharedLegalProfiles = {
  getAllUsersLegalProfiles(): Promise<LegalProfileResponseData[]> {
    return axiosBaseWrap
      .get("/legal_profiles")
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
};
