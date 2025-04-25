import React from "react";
import { Container, Grid } from "@mui/material";
import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";

export const ProfileModule = () => {
  return (
    <React.Fragment>
      <BasicPageHeader title="Мой профиль" />
      <Container maxWidth={false}>
        <Grid container spacing={2}></Grid>
      </Container>
    </React.Fragment>
  );
};
