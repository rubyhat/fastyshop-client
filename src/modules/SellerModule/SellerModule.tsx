import React from "react";
import { Container, Grid } from "@mui/material";

import { SellerProfile } from "./components/SellerProfile";
import { SellerShops } from "./components/SellerShops";
import { SellerLegalProfiles } from "./components/SellerLegalProfiles";
import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";
import { useIsSeller } from "../../shared/permissions/hooks";

export const SellerModule = () => {
  const isSeller = useIsSeller();
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
          {isSeller && (
            <React.Fragment>
              <Grid size={12}>
                <SellerShops />
              </Grid>
              <Grid size={12}>
                <SellerLegalProfiles />
              </Grid>
            </React.Fragment>
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};
