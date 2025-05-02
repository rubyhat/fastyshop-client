import { axiosBaseWrap } from "../../../configs/api";
import { RegistrationFormData } from "../validations";

export const apiRegistrationModule = {
  postNewUser(data: RegistrationFormData) {
    return axiosBaseWrap
      .post("/users", data)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
};
