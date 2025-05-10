import { useQueryClient } from "@tanstack/react-query";

import { ShopFormData } from "../validations";
import { apiShopFormModule } from "../api/apiShopFormModule";
import { useAxiosMutation } from "../../../configs/useAxiosMutation";
import { ShopData } from "../../../shared/interfaces/Shop";
import { showApiError } from "../../../shared/utils";

interface ShopMutationProps {
  onSuccessCallback?: (response: ShopData) => void;
}

export const usePatchShopMutation = ({
  onSuccessCallback,
}: ShopMutationProps) => {
  const queryClient = useQueryClient();

  return useAxiosMutation({
    mutationFn: ({ data, id }: { data: ShopFormData; id: string }) =>
      apiShopFormModule.patchShop(data, id),
    onSuccess: (response) => {
      if (onSuccessCallback) onSuccessCallback(response);
      queryClient.invalidateQueries({
        queryKey: ["get-all-shops"],
      });
      queryClient.invalidateQueries({
        queryKey: ["get-shop-by-id", response?.id],
      });
    },
    onError: (error) => {
      showApiError(error);
      return error;
    },
  });
};
