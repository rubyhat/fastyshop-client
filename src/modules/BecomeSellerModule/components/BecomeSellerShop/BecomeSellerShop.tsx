import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography } from "@mui/material";

import { useBecomeSellerStore } from "../../store";
import { ShopFormModule } from "../../../ShopFormModule";
import { ShopData } from "../../../../shared/interfaces/Shop";

export const BecomeSellerShop = () => {
  const navigate = useNavigate();
  const setStep = useBecomeSellerStore((state) => state.setStep);
  const resetForm = useBecomeSellerStore((state) => state.resetForm);

  const handleSuccessShopReq = (response: ShopData) => {
    navigate("/shops/" + response.id);
    resetForm();
  };

  return (
    <Box py={2}>
      <Box component={Paper} sx={{ p: 2 }}>
        <Typography component="h6" variant="h6">
          Создание магазина
        </Typography>
        <Typography
          component="p"
          variant="body2"
          color="customColors.labelsSecondary"
        >
          Настройки будущего магазина
        </Typography>
        <ShopFormModule
          onClickReturnButton={() => setStep(1)}
          onSuccessCallback={handleSuccessShopReq}
        />
      </Box>
    </Box>
  );
};
