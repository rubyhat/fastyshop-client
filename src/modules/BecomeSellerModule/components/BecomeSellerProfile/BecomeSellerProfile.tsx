import { Box, Paper, Typography } from "@mui/material";
import { useBecomeSellerStore } from "../../store";
import { useUserStore } from "../../../UserModule/store";
import { SellerProfileFormModule } from "../../../SellerProfileFormModule";
import { SellerProfileResponseData } from "../../../../shared/interfaces";
import { UserRole } from "../../../../shared/permissions/roles";

export const BecomeSellerProfile = () => {
  const resetForm = useBecomeSellerStore((state) => state.resetForm);
  const setStep = useBecomeSellerStore((state) => state.setStep);
  const setSellerProfileId = useBecomeSellerStore(
    (state) => state.setSellerProfileId,
  );
  const currentUserProfile = useUserStore((state) => state.profile);
  const setUserProfile = useUserStore((state) => state.setUserProfile);

  const handleSuccessSellerProfileReq = (
    response: SellerProfileResponseData,
  ) => {
    if (currentUserProfile) {
      const mutatedProfile = { ...currentUserProfile, role: UserRole.seller };
      setUserProfile(mutatedProfile);
    }
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
