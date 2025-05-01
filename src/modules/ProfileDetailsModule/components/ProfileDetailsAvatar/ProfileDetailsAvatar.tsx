import { Box, CircularProgress, Tooltip, Typography } from "@mui/material";
import { FaUserAlt } from "react-icons/fa";

import { useUserProfile } from "../../../../shared/permissions/hooks";

import {
  profileDetailsAvatarImgWrapperStyles,
  profileDetailsAvatarStyles,
} from "./styles";
import { DisplayCountryFlag } from "../../../../shared/components/DisplayCountryFlag";
import { CountryCodeDisplayText } from "../../../../shared/interfaces/Country";

export const ProfileDetailsAvatar = () => {
  const profile = useUserProfile();
  console.log("profile", profile);
  if (profile) {
    return (
      <Box sx={profileDetailsAvatarStyles}>
        <Box sx={profileDetailsAvatarImgWrapperStyles}>
          <FaUserAlt size={64} color="#aaa" />
        </Box>
        <Typography component="p" variant="body1">
          {profile.first_name || "-"}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography component="p" variant="body1">
            +{profile.phone || "-"}{" "}
          </Typography>
          <Tooltip title={CountryCodeDisplayText[profile.country_code]}>
            <Box>
              <DisplayCountryFlag country_code={profile.country_code} />
            </Box>
          </Tooltip>
        </Box>
      </Box>
    );
  }
  return (
    <Box p={2}>
      <CircularProgress size={24} color="primary" />
    </Box>
  );
};
