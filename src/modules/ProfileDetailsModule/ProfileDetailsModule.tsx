import React from "react";
import { Container, Grid } from "@mui/material";

import { ProfileDetailsAvatar } from "./components/ProfileDetailsAvatar";
import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";

export const ProfileDetailsModule = () => {
  return (
    <React.Fragment>
      <BasicPageHeader title="Детали профиля" />
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <ProfileDetailsAvatar />
          </Grid>
          <Grid size={12}></Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
