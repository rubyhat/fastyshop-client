import toast from "react-hot-toast";
import { apiLegalProfileFormModule } from "../api";
import { useAxiosMutation } from "../../../configs/useAxiosMutation";
import { LegalProfileFormData } from "../validations/legalProfileFormValidationSchema";
import { LegalProfileResponseData } from "../../../shared/interfaces";

interface LegalProfileMutationProps {
  onSuccessCallback?: (response: LegalProfileResponseData) => void;
}

export const usePostLegalProfileMutation = ({
  onSuccessCallback,
}: LegalProfileMutationProps) => {
  return useAxiosMutation({
    mutationFn: (data: LegalProfileFormData) =>
      apiLegalProfileFormModule.postLegalProfile(data),
    onSuccess: (response) => {
      if (onSuccessCallback) onSuccessCallback(response);
      return response;
    },
    onError: (error) => {
      toast.error(
        "Произошла ошибка при сохранении юридического профиля: " +
          error.response?.data.error.message,
      );
      return error;
    },
  });
};
