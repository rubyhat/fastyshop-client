import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography } from "@mui/material";

import { FaBagShopping } from "react-icons/fa6";
import { FaShop } from "react-icons/fa6";
import { MdAddShoppingCart } from "react-icons/md";

import {
  profileFavoritesLinkItemStyles,
  profileFavoritesLinksStyles,
} from "./styles";

import { useUserStore } from "../../../UserModule/store";
import { UserRole } from "../../../../shared/permissions/roles";

export const ProfileFavoritesLinks = () => {
  const navigate = useNavigate();
  const { role } = useUserStore();

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
      {role && role === UserRole.seller && (
        <Box
          component={Paper}
          sx={profileFavoritesLinkItemStyles}
          onClick={() => navigate("/shops")}
        >
          <FaShop size={20} color="#1c1c1c" />
          <Typography component="p" variant="body2">
            Мои магазины
          </Typography>
        </Box>
      )}
      {role && role === UserRole.user && (
        <Box
          component={Paper}
          sx={profileFavoritesLinkItemStyles}
          onClick={() => navigate("/seller-profile/create")}
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
