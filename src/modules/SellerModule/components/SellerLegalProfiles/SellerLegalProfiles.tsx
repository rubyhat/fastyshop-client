import { Box, Typography } from "@mui/material";
import { useSellerStore } from "../../store";
import { SellerLegalInfo } from "../SellerLegalInfo";
import { LegalProfileFormDrawer } from "../../../../shared/components/LegalProfileFormDrawer";
import { CreateVerificationDrawer } from "../../../../shared/components/CreateVerificationDrawer";

export const SellerLegalProfiles = () => {
  const legalFormMode = useSellerStore((state) => state.legalFormMode);
  const editingLegalProfile = useSellerStore(
    (state) => state.editingLegalProfile,
  );

  const showLegalProfileFormDrawer = useSellerStore(
    (state) => state.showLegalProfileFormDrawer,
  );
  const setShowLegalProfileFormDrawer = useSellerStore(
    (state) => state.setShowLegalProfileFormDrawer,
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
      <LegalProfileFormDrawer
        editingProfile={editingLegalProfile}
        mode={legalFormMode}
        isOpen={showLegalProfileFormDrawer}
        setIsOpen={setShowLegalProfileFormDrawer}
      />
    </Box>
  );
};
