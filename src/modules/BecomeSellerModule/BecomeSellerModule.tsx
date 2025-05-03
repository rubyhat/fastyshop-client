import React from "react";
import { Container, Grid } from "@mui/material";

import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";

export const BecomeSellerModule = () => {
  return (
    <React.Fragment>
      <BasicPageHeader
        title="Создание магазина"
        shownBackArrowButton
        backButtonLink="/seller"
      />
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          <Grid size={12}></Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
