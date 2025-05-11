import { Box } from "@mui/material";
import { CartModule } from "../../modules/CartModule";

export const Cart = () => {
  return (
    <Box component="section" data-testid="pageCart">
      <CartModule />
    </Box>
  );
};
