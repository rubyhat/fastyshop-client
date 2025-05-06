import { Box, Button, Paper, Typography } from "@mui/material";

export const SellerCreateProfileBlock = () => {
  return (
    <Box component={Paper} sx={{ p: 2, mt: 2 }}>
      <Typography component="p" variant="h6" fontWeight={700}>
        Создайте профиль продавца
      </Typography>
      <Typography component="p" variant="body1">
        Чтобы создать магазин и начать продавать товары или услуги необходимо
        создать профиль продавца - это быстро :{")"}
      </Typography>
      <Button variant="contained" color="success" fullWidth sx={{ mt: 2 }}>
        Создать профиль
      </Button>
    </Box>
  );
};
