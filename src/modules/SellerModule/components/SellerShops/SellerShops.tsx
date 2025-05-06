import { Box, Typography } from "@mui/material";
import { SellerShopsInfo } from "../SellerShopsInfo";
import { useSellerStore } from "../../store";
import { CreateShopDrawer } from "../../../../shared/components/CreateShopDrawer";

export const SellerShops = () => {
  const showCreateShopDrawer = useSellerStore(
    (state) => state.showCreateShopDrawer,
  );
  const setShowCreateShopDrawer = useSellerStore(
    (state) => state.setShowCreateShopDrawer,
  );

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
      <CreateShopDrawer
        isOpen={showCreateShopDrawer}
        setIsOpen={setShowCreateShopDrawer}
      />
    </Box>
  );
};
