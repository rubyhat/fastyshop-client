import { Box, Paper, Typography } from "@mui/material";
import { FaUserCog } from "react-icons/fa";
import { profileInfoCardStyles } from "./styles";

export const ProfileInfoCard = () => {
  return (
    <Box component={Paper} sx={profileInfoCardStyles}>
      <Box>
        <FaUserCog size={32} />
      </Box>
      <Box>
        <Typography component="h6" variant="h6">
          Маршалл
        </Typography>
        <Typography component="p" variant="body2">
          Просмотр профиля
        </Typography>
      </Box>
    </Box>
  );
};
