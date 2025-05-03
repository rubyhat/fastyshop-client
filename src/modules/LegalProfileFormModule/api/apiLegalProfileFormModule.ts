import { axiosBaseWrap } from "../../../configs/api";
import { LegalProfileResponseData } from "../../../shared/interfaces";
import { LegalProfileFormData } from "../validations";

export const apiLegalProfileFormModule = {
  /** Создание юридического профиля продавца */
  postLegalProfile(
    data: LegalProfileFormData,
  ): Promise<LegalProfileResponseData> {
    return axiosBaseWrap
      .post("/legal_profiles", data)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
};
