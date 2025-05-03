import { axiosBaseWrap } from "../../../configs/api";
import { SellerProfileFormData } from "../validations/sellerProfileFormValidationSchema";
import { LegalProfileFormData } from "../validations/legalProfileFormValidationSchema";
import {
  LegalProfileResponseData,
  SellerProfileResponseData,
} from "../../../shared/interfaces";

export const apiBecomeSellerModule = {
  /** Создание профиля продавца */
  postSellerProfile(
    data: SellerProfileFormData,
  ): Promise<SellerProfileResponseData> {
    return axiosBaseWrap
      .post("/seller_profiles", data)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
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
