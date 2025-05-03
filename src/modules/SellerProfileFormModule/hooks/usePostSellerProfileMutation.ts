import toast from "react-hot-toast";
import { apiSellerProfileFormModule } from "../api";
import { useAxiosMutation } from "../../../configs/useAxiosMutation";
import { SellerProfileFormData } from "../validations/sellerProfileFormValidationSchema";
import { SellerProfileResponseData } from "../../../shared/interfaces";

interface SellerProfileMutationProps {
  onSuccessCallback?: (response: SellerProfileResponseData) => void;
}

export const usePostSellerProfileMutation = ({
  onSuccessCallback,
}: SellerProfileMutationProps) => {
  return useAxiosMutation({
    mutationFn: (data: SellerProfileFormData) =>
      apiSellerProfileFormModule.postSellerProfile(data),
    onSuccess: (response) => {
      if (onSuccessCallback) onSuccessCallback(response);
      return response;
    },
    onError: (error) => {
      toast.error(
        "Произошла ошибка при создании профиля продавца: " +
          error.response?.data.error.message,
      );
      return error;
    },
  });
};
