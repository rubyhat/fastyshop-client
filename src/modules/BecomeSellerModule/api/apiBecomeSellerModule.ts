import { axiosBaseWrap } from "../../../configs/api";
import { LegalProfileFormData } from "../validations/legalProfileFormValidationSchema";
import { LegalProfileResponseData } from "../../../shared/interfaces";

export const apiBecomeSellerModule = {
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
