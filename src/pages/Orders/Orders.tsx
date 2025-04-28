import { Box } from "@mui/material";
import { OrdersModule } from "../../modules/OrdersModule";

export const Orders = () => {
  return (
    <Box component="section" data-testid="pageOrders">
      <OrdersModule />
    </Box>
  );
};
