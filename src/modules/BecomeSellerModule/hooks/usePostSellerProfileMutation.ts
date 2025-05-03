import toast from "react-hot-toast";
import { useAxiosMutation } from "../../../configs/useAxiosMutation";
import { apiBecomeSellerModule } from "../api/apiBecomeSellerModule";
import { useBecomeSellerStore } from "../store";
import { SellerProfileFormData } from "../validations/sellerProfileFormValidationSchema";

export const usePostSellerProfileMutation = () => {
  const setStep = useBecomeSellerStore((state) => state.setStep);
  const setSellerProfileId = useBecomeSellerStore(
    (state) => state.setSellerProfileId,
  );

  return useAxiosMutation({
    mutationFn: (data: SellerProfileFormData) =>
      apiBecomeSellerModule.postSellerProfile(data),
    onSuccess: (response) => {
      setSellerProfileId(response.id);
      setStep(2);
      return response;
    },
    onError: (error) => {
      toast.error(
        "Произошла ошибка при создании профиля продавца" + error.message,
      );
    },
  });
};
