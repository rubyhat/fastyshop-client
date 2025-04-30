import { Box, IconButton, Paper, Typography } from "@mui/material";
import { IoMdSettings } from "react-icons/io";

import { profileInfoCardAvatarStyles, profileInfoCardStyles } from "./styles";
import { useNavigate } from "react-router-dom";

export const ProfileInfoCard = () => {
  const navigate = useNavigate();

  return (
    <Box
      component={Paper}
      sx={profileInfoCardStyles}
      onClick={() => navigate("/profile/details")}
    >
      <Box sx={profileInfoCardAvatarStyles}>М</Box>
      <Box>
        <Typography component="h6" variant="body2" fontWeight={700}>
          Маршалл Ц.
        </Typography>
        <Typography component="p" variant="caption">
          Просмотр профиля
        </Typography>
      </Box>
      <IconButton sx={{ ml: "auto" }}>
        <IoMdSettings color="#1c1c1c" />
      </IconButton>
    </Box>
  );
};
