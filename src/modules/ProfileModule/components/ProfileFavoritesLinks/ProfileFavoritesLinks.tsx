import { Box, Paper, Typography } from "@mui/material";
import { FaBagShopping } from "react-icons/fa6";
import { FaShop } from "react-icons/fa6";
import {
  profileFavoritesLinkItemStyles,
  profileFavoritesLinksStyles,
} from "./styles";
import { useNavigate } from "react-router-dom";

export const ProfileFavoritesLinks = () => {
  const navigate = useNavigate();

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
    </Box>
  );
};
