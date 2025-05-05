import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import { useAxiosMutation } from "../../../configs/useAxiosMutation";
import { apiShopFormModule } from "../api/apiShopFormModule";
import { ShopFormData } from "../validations";
import { ShopData } from "../../../shared/interfaces/Shop";

interface ShopMutationProps {
  onSuccessCallback?: (response: ShopData) => void;
}

export const usePostShopMutation = ({
  onSuccessCallback,
}: ShopMutationProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useAxiosMutation({
    mutationFn: (data: ShopFormData) => apiShopFormModule.postShop(data),
    onSuccess: (response) => {
      if (onSuccessCallback) onSuccessCallback(response);
      queryClient.invalidateQueries({
        queryKey: ["get-all-shops"],
      });
      queryClient.invalidateQueries({
        queryKey: ["get-shop-by-id", response?.id],
      });
      navigate("/shops/" + response.id);
      toast.success("Магазин успешно создан!");
    },
    onError: (error) => {
      toast.error("Произошла ошибка: " + error.response?.data.message);
    },
  });
};
