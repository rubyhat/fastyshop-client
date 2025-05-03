import { Box } from "@mui/material";
import { SellerModule } from "../../modules/SellerModule";

export const Seller = () => {
  return (
    <Box component="section" data-testid="pageSeller">
      <SellerModule />
    </Box>
  );
};
