import React from "react";
import { Box, Container, Grid } from "@mui/material";

import { ProfileInfoCard } from "./components/ProfileInfoCard";
import { ProfileNavigateMenu } from "./components/ProfileNavigateMenu";
import { ProfileFavoritesLinks } from "./components/ProfileFavoritesLinks";

import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";

export const ProfileModule = () => {
  return (
    <React.Fragment>
      <BasicPageHeader title="Мой профиль" shownBackArrowButton />
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Box sx={{ py: 2, width: 1 }}>
              <ProfileInfoCard />
            </Box>
            <Box sx={{ pb: 2, width: 1 }}>
              <ProfileFavoritesLinks />
            </Box>
            <Box sx={{ pb: 2, width: 1 }}>
              <ProfileNavigateMenu />
            </Box>
          </Grid>
          <Grid size={12}></Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
