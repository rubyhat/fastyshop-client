import toast from "react-hot-toast";
import { useAxiosMutation } from "../../../configs/useAxiosMutation";
import { apiBecomeSellerModule } from "../api/apiBecomeSellerModule";
import { useBecomeSellerStore } from "../store";
import { LegalProfileFormData } from "../validations/legalProfileFormValidationSchema";

export const usePostLegalProfileMutation = () => {
  const setStep = useBecomeSellerStore((state) => state.setStep);
  const setSellerProfileId = useBecomeSellerStore(
    (state) => state.setSellerProfileId,
  );
  const setLegalProfileId = useBecomeSellerStore(
    (state) => state.setLegalProfileId,
  );

  return useAxiosMutation({
    mutationFn: (data: LegalProfileFormData) =>
      apiBecomeSellerModule.postLegalProfile(data),
    onSuccess: (response) => {
      setStep(3);
      setLegalProfileId(response.id);
      setSellerProfileId(response.seller_profile_id);
      return response;
    },
    onError: (error) => {
      toast.error(
        "Произошла ошибка при сохранении юридического профиля" + error.message,
      );
    },
  });
};
