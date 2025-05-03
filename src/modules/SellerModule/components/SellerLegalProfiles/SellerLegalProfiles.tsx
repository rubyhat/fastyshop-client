import { Box, Typography } from "@mui/material";

export const SellerLegalProfiles = () => {
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
    </Box>
  );
};
