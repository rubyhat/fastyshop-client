import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import { ProfileInfoCard } from "./components/ProfileInfoCard";
import { ProfileFavoritesLinks } from "./components/ProfileFavoritesLinks";
import { version } from "../../../package.json";

import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";
import { BasicNavListToPage } from "../../shared/components/BasicNavListToPage";

const list = [
  { label: "Центр поддержки", link: "/help" },
  { label: "Соглашения и Правила", link: "/docs" },
];

export const ProfileModule = () => {
  return (
    <React.Fragment>
      <BasicPageHeader
        title="Мой профиль"
        shownBackArrowButton
        backButtonLink="/"
      />
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Box sx={{ py: 2, width: 1 }}>
              <ProfileInfoCard />
            </Box>
            <Box sx={{ pb: 2, width: 1 }}>
              <ProfileFavoritesLinks />
            </Box>
            <Box sx={{ width: 1 }}>
              <BasicNavListToPage list={list} />
              <Typography component="p" variant="body2" mt={1} color="#aaa">
                Версия платформы: {version}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
