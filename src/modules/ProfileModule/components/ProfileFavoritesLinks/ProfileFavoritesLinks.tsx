import { Link } from "react-router-dom";
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
  const isSeller = useIsSeller();
  const isUser = useIsUser();

  return (
    <Box sx={profileFavoritesLinksStyles}>
      <Box component={Paper} sx={profileFavoritesLinkItemStyles}>
        <Box component={Link} to="/orders">
          <FaBagShopping size={20} color="#1c1c1c" />
          <Typography
            component="p"
            variant="body2"
            color="customColors.labelsPrimary"
          >
            Мои покупки
          </Typography>
        </Box>
      </Box>
      {isSeller && (
        <Box component={Paper} sx={profileFavoritesLinkItemStyles}>
          <Box component={Link} to="/seller">
            <FaShop size={20} color="#1c1c1c" />
            <Typography
              component="p"
              variant="body2"
              color="customColors.labelsPrimary"
            >
              Мои магазины
            </Typography>
          </Box>
        </Box>
      )}
      {isUser && (
        <Box component={Paper} sx={profileFavoritesLinkItemStyles}>
          <Box component={Link} to="/seller/create">
            <MdAddShoppingCart size={20} color="#1c1c1c" />
            <Typography
              component="p"
              variant="body2"
              color="customColors.labelsPrimary"
            >
              Создать магазин
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};
