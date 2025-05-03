import { Box, Paper, Typography } from "@mui/material";
import { useBecomeSellerStore } from "../../store";
import { SellerProfileFormModule } from "../../../SellerProfileFormModule";
import { SellerProfileResponseData } from "../../../../shared/interfaces";

export const BecomeSellerProfile = () => {
  const resetForm = useBecomeSellerStore((state) => state.resetForm);
  const setStep = useBecomeSellerStore((state) => state.setStep);
  const setSellerProfileId = useBecomeSellerStore(
    (state) => state.setSellerProfileId,
  );

  const handleSuccessSellerProfileReq = (
    response: SellerProfileResponseData,
  ) => {
    setSellerProfileId(response.id);
    setStep(2);
  };

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
          onSuccessCallback={handleSuccessSellerProfileReq}
        />
      </Box>
    </Box>
  );
};
