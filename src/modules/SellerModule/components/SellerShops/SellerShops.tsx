import { Box, Typography } from "@mui/material";
import { SellerShopsInfo } from "../SellerShopsInfo";
import { useSellerStore } from "../../store";
import { ShopDrawer } from "../../../../shared/components/ShopDrawer";

export const SellerShops = () => {
  const showShopDrawer = useSellerStore((state) => state.showShopDrawer);
  const setShowShopDrawer = useSellerStore((state) => state.setShowShopDrawer);

  return (
    <Box>
      <Typography component="h6" variant="h5">
        Мои магазины
      </Typography>
      <Typography
        component="p"
        variant="body2"
        color="customColors.labelsSecondary"
      >
        Ваши созданные магазины
      </Typography>
      <SellerShopsInfo />
      <ShopDrawer
        mode="create"
        isOpen={showShopDrawer}
        setIsOpen={setShowShopDrawer}
        editingShop={null}
      />
    </Box>
  );
};
