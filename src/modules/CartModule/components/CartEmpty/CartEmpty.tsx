import { Box, Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const CartEmpty = () => {
  return (
    <Box pt={2}>
      <Box component={Paper} p={2}>
        <Typography component="h6" variant="h6">
          Корзина пуста
        </Typography>
        <Typography component="p" variant="body2">
          Пора добавить товары в корзину!
        </Typography>
        <Box component={Link} to="/catalog" display="block" pt={2}>
          <Button fullWidth variant="contained" color="primary">
            Перейти в каталог
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
