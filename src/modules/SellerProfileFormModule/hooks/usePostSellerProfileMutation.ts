import toast from "react-hot-toast";
import { useAxiosMutation } from "../../../configs/useAxiosMutation";
import { useBecomeSellerStore } from "../../BecomeSellerModule/store";
import { SellerProfileFormData } from "../validations/sellerProfileFormValidationSchema";
import { apiSellerProfileFormModule } from "../api";

export const usePostSellerProfileMutation = () => {
  const setStep = useBecomeSellerStore((state) => state.setStep);
  const setSellerProfileId = useBecomeSellerStore(
    (state) => state.setSellerProfileId,
  );

  return useAxiosMutation({
    mutationFn: (data: SellerProfileFormData) =>
      apiSellerProfileFormModule.postSellerProfile(data),
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
