import { Box } from "@mui/material";
import { ShopDetailsModule } from "../../modules/ShopDetailsModule";

export const ShopDetails = () => {
  return (
    <Box component="section" data-testid="pageShopDetails">
      <ShopDetailsModule />
    </Box>
  );
};
