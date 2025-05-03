import { Box, Paper, Typography } from "@mui/material";
import { useBecomeSellerStore } from "../../store";
import { LegalProfileFormModule } from "../../../LegalProfileFormModule";
import { LegalProfileResponseData } from "../../../../shared/interfaces";

export const BecomeSellerLegalProfile = () => {
  const setStep = useBecomeSellerStore((state) => state.setStep);
  const setSellerProfileId = useBecomeSellerStore(
    (state) => state.setSellerProfileId,
  );
  const setLegalProfileId = useBecomeSellerStore(
    (state) => state.setLegalProfileId,
  );

  const handleSuccessLegalProfileReq = (response: LegalProfileResponseData) => {
    setStep(3);
    setLegalProfileId(response.id);
    setSellerProfileId(response.seller_profile_id);
  };

  return (
    <Box py={2}>
      <Box component={Paper} sx={{ p: 2 }}>
        <Typography component="h6" variant="h6">
          Юридический профиль
        </Typography>
        <Typography
          component="p"
          variant="body2"
          color="customColors.labelsSecondary"
        >
          Эти данные будут закреплены за магазином
        </Typography>
        <LegalProfileFormModule
          onClickReturnButton={() => setStep(1)}
          onSuccessCallback={handleSuccessLegalProfileReq}
        />
      </Box>
    </Box>
  );
};
