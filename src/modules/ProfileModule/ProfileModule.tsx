import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";
import { ProfileToggleButtons } from "./components/ProfileToggleButtons";

export const ProfileModule = () => {
  return (
    <React.Fragment>
      <BasicPageHeader title="Мой профиль" />
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          <Box sx={{ p: 2, width: 1 }}>
            <ProfileToggleButtons />
          </Box>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
