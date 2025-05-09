import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

import { useAxiosMutation } from "../../../configs/useAxiosMutation";
import { apiShopFormModule } from "../api/apiShopFormModule";
import { ShopFormData } from "../validations";
import { ShopData } from "../../../shared/interfaces/Shop";
import { showApiError } from "../../../shared/utils";

interface ShopMutationProps {
  onSuccessCallback?: (response: ShopData) => void;
}

export const usePostShopMutation = ({
  onSuccessCallback,
}: ShopMutationProps) => {
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

      toast.success("Магазин успешно создан!");
    },
    onError: (error) => {
      showApiError(error);
      return error;
    },
  });
};
