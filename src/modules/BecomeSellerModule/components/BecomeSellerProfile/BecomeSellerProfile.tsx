import { Box, Paper, Typography } from "@mui/material";
import { useBecomeSellerStore } from "../../store";
import { SellerProfileFormModule } from "../../../SellerProfileFormModule";

export const BecomeSellerProfile = () => {
  const resetForm = useBecomeSellerStore((state) => state.resetForm);
  return (
    <Box py={2}>
      <Box component={Paper} sx={{ p: 2 }}>
        <Typography component="h6" variant="h6">
          Профиль продавца
        </Typography>
        <Typography
          component="p"
          variant="body2"
          color="customColors.labelsSecondary"
        >
          Расскажите немного о своем магазине
        </Typography>
        <SellerProfileFormModule
          onResetForm={resetForm}
          onCancelNavigationLink="/profile"
        />
      </Box>
    </Box>
  );
};
