import { Box, Typography } from "@mui/material";
import { SellerCreateProfileBlock } from "../SellerCreateProfileBlock";
import { SellerProfileInfo } from "../SellerProfileInfo";

import {
  useIsSeller,
  useIsUser,
  useUserProfile,
} from "../../../../shared/permissions/hooks";

export const SellerProfile = () => {
  const profile = useUserProfile();
  const isSeller = useIsSeller();
  const isUser = useIsUser();
  return (
    <Box pt={2}>
      <Typography component="h6" variant="h5">
        Профиль продавца
      </Typography>
      <Typography
        component="p"
        variant="body2"
        color="customColors.labelsSecondary"
      >
        У каждого продавца есть свой профиль
      </Typography>
      {isUser && <SellerCreateProfileBlock />}
      {isSeller && profile && <SellerProfileInfo userId={profile.id} />}
    </Box>
  );
};
