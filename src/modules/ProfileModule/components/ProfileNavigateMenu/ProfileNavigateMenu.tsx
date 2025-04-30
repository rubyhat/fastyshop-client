import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography } from "@mui/material";

import { FaInfo } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { HiOutlineDocumentText } from "react-icons/hi";

import {
  profileNavigateMenuStyles,
  profileNavigateMenuListStyles,
  profileNavigateMenuLiItemStyles,
  profileNavigateMenuIconStyles,
  profileNavigateMenuTextWrapperStyles,
} from "./styles";

export const ProfileNavigateMenu = () => {
  const navigate = useNavigate();

  return (
    <Box component={Paper} sx={profileNavigateMenuStyles}>
      <Box component="ul" sx={profileNavigateMenuListStyles}>
        <Box
          component="li"
          sx={profileNavigateMenuLiItemStyles}
          onClick={() => navigate("/support")}
        >
          <Box sx={profileNavigateMenuIconStyles}>
            <FaInfo size={12} color="#fff" />
          </Box>
          <Box sx={profileNavigateMenuTextWrapperStyles}>
            <Typography component="p" variant="body1">
              Центр поддержки
            </Typography>
            <Box
              sx={{ ml: "auto", mr: 1, display: "flex", alignItems: "center" }}
            >
              <FaAngleRight size={20} />
            </Box>
          </Box>
        </Box>
        <Box
          component="li"
          sx={profileNavigateMenuLiItemStyles}
          onClick={() => navigate("/docs")}
        >
          <Box sx={profileNavigateMenuIconStyles}>
            <HiOutlineDocumentText size={12} color="#fff" />
          </Box>
          <Box sx={profileNavigateMenuTextWrapperStyles}>
            <Typography component="p" variant="body1">
              Соглашения и правила
            </Typography>
            <Box sx={{ ml: "auto", mr: 1 }}>
              <FaAngleRight size={20} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
