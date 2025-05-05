import { Box, Paper, Typography } from "@mui/material";
import { ShopFormModule } from "../../../ShopFormModule";
import { useBecomeSellerStore } from "../../store";

export const BecomeSellerShop = () => {
  const setStep = useBecomeSellerStore((state) => state.setStep);

  const handleSuccessShopReq = () => {
    // todo: редирект на страницу настроек созданного магазина
    // очистить стейт текущего модуля
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
