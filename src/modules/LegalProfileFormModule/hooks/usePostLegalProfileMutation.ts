import { useQueryClient } from "@tanstack/react-query";

import { apiLegalProfileFormModule } from "../api";
import { useAxiosMutation } from "../../../configs/useAxiosMutation";
import { LegalProfileFormData } from "../validations/legalProfileFormValidationSchema";
import { LegalProfileResponseData } from "../../../shared/interfaces";
import { useUserProfile } from "../../../shared/permissions/hooks";
import { showApiError } from "../../../shared/utils";

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
        queryKey: ["get-all-legal-profiles-of-user", profile?.id],
      });
      return response;
    },
    onError: (error) => {
      showApiError(error);
      return error;
    },
  });
};
