import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

import { apiLegalProfileFormModule } from "../api";
import { useAxiosMutation } from "../../../configs/useAxiosMutation";
import { LegalProfileFormData } from "../validations/legalProfileFormValidationSchema";
import { LegalProfileResponseData } from "../../../shared/interfaces";
import { useUserProfile } from "../../../shared/permissions/hooks";

interface LegalProfileMutationProps {
  onSuccessCallback?: (response: LegalProfileResponseData) => void;
}

export const usePostLegalProfileMutation = ({
  onSuccessCallback,
}: LegalProfileMutationProps) => {
  const queryClient = useQueryClient();
  const profile = useUserProfile();
  return useAxiosMutation({
    mutationFn: (data: LegalProfileFormData) =>
      apiLegalProfileFormModule.postLegalProfile(data),
    onSuccess: (response) => {
      if (onSuccessCallback) onSuccessCallback(response);
      queryClient.invalidateQueries({
        queryKey: ["get-all-users-legal-profiles", profile?.id],
      });
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
