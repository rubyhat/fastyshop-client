import { Box, Typography } from "@mui/material";

export const SellerShops = () => {
  return (
    <Box>
      <Typography component="h6" variant="h5">
        Мои магазины
      </Typography>
      <Typography
        component="p"
        variant="body2"
        color="customColors.labelsSecondary"
      >
        Ваши созданные магазины
      </Typography>
    </Box>
  );
};
