import { Box, Typography } from "@mui/material";
import { SellerLegalInfo } from "../SellerLegalInfo";
import { CreateLegalProfileDrawer } from "../../../../shared/components/CreateLegalProfileDrawer";
import { useSellerStore } from "../../store";
import { CreateVerificationDrawer } from "../../../../shared/components/CreateVerificationDrawer";

export const SellerLegalProfiles = () => {
  const showCreateLegalProfileDrawer = useSellerStore(
    (state) => state.showCreateLegalProfileDrawer,
  );
  const setShowCreateLegalProfileDrawer = useSellerStore(
    (state) => state.setShowCreateLegalProfileDrawer,
  );

  const showVerificationDrawer = useSellerStore(
    (state) => state.showVerificationDrawer,
  );
  const setShowVerificationDrawer = useSellerStore(
    (state) => state.setShowVerificationDrawer,
  );

  return (
    <Box>
      <Typography component="h6" variant="h5" mt={2}>
        Юридические профили
      </Typography>
      <Typography
        component="p"
        variant="body2"
        color="customColors.labelsSecondary"
      >
        Ваши юридические данные используемые в магазинах
      </Typography>
      <SellerLegalInfo />
      <CreateVerificationDrawer
        isOpen={showVerificationDrawer}
        setIsOpen={setShowVerificationDrawer}
      />
      <CreateLegalProfileDrawer
        isOpen={showCreateLegalProfileDrawer}
        setIsOpen={setShowCreateLegalProfileDrawer}
      />
    </Box>
  );
};
