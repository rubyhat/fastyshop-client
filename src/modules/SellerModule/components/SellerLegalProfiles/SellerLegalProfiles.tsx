import { Box, Typography } from "@mui/material";
import { SellerLegalInfo } from "../SellerLegalInfo";
import { CreateLegalProfileDrawer } from "../../../../shared/components/CreateLegalProfileDrawer";
import { useSellerStore } from "../../store";

export const SellerLegalProfiles = () => {
  const showCreateLegalProfileDrawer = useSellerStore(
    (state) => state.showCreateLegalProfileDrawer,
  );
  const setShowCreateLegalProfileDrawer = useSellerStore(
    (state) => state.setShowCreateLegalProfileDrawer,
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
      <CreateLegalProfileDrawer
        isOpen={showCreateLegalProfileDrawer}
        setIsOpen={setShowCreateLegalProfileDrawer}
      />
    </Box>
  );
};
