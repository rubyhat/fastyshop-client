import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography } from "@mui/material";

import { FaBagShopping } from "react-icons/fa6";
import { FaShop } from "react-icons/fa6";
import { MdAddShoppingCart } from "react-icons/md";

import {
  profileFavoritesLinkItemStyles,
  profileFavoritesLinksStyles,
} from "./styles";

import { useIsSeller, useIsUser } from "../../../../shared/permissions/hooks";

export const ProfileFavoritesLinks = () => {
  const navigate = useNavigate();
  const isSeller = useIsSeller();
  const isUser = useIsUser();

  return (
    <Box sx={profileFavoritesLinksStyles}>
      <Box
        component={Paper}
        sx={profileFavoritesLinkItemStyles}
        onClick={() => navigate("/orders")}
      >
        <FaBagShopping size={20} color="#1c1c1c" />
        <Typography component="p" variant="body2">
          Мои покупки
        </Typography>
      </Box>
      {isSeller && (
        <Box
          component={Paper}
          sx={profileFavoritesLinkItemStyles}
          onClick={() => navigate("/seller")}
        >
          <FaShop size={20} color="#1c1c1c" />
          <Typography component="p" variant="body2">
            Мои магазины
          </Typography>
        </Box>
      )}
      {isUser && (
        <Box
          component={Paper}
          sx={profileFavoritesLinkItemStyles}
          onClick={() => navigate("/seller/create")}
        >
          <MdAddShoppingCart size={20} color="#1c1c1c" />
          <Typography component="p" variant="body2">
            Создать магазин
          </Typography>
        </Box>
      )}
    </Box>
  );
};
