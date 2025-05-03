import React from "react";
import { Container, Grid } from "@mui/material";

import { SellerProfile } from "./components/SellerProfile";
import { SellerShops } from "./components/SellerShops";
import { SellerLegalProfiles } from "./components/SellerLegalProfiles";
import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";

export const SellerModule = () => {
  return (
    <React.Fragment>
      <BasicPageHeader
        title="Профиль продавца"
        shownBackArrowButton
        backButtonLink="/profile"
      />
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <SellerProfile />
          </Grid>
          <Grid size={12}>
            <SellerShops />
          </Grid>
          <Grid size={12}>
            <SellerLegalProfiles />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
