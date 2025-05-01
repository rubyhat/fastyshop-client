import { Box, IconButton, Paper, Skeleton, Typography } from "@mui/material";
import { IoMdSettings } from "react-icons/io";

import { profileInfoCardAvatarStyles, profileInfoCardStyles } from "./styles";
import { useNavigate } from "react-router-dom";
import { useUserProfile } from "../../../../shared/permissions/hooks";
import { displayUserName } from "../../../../shared/utils";

export const ProfileInfoCard = () => {
  const navigate = useNavigate();
  const profile = useUserProfile();

  if (profile) {
    const { first_name, last_name, middle_name } = profile;
    const { shortName } = displayUserName({
      first_name,
      last_name,
      middle_name,
    });

    return (
      <Box
        component={Paper}
        sx={profileInfoCardStyles}
        onClick={() => navigate("/profile/details")}
      >
        <Box sx={profileInfoCardAvatarStyles}>М</Box>
        <Box>
          <Typography component="h6" variant="body2" fontWeight={700}>
            {shortName}
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
  }

  return <Skeleton variant="rounded" width="100%" height={72} />;
};
