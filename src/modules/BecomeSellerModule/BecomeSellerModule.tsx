import React from "react";
import { Container, Grid } from "@mui/material";

import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";
import { useBecomeSellerStore } from "./store";
import { BecomeSellerProfile } from "./components/BecomeSellerProfile";
import { BecomeSellerLegalProfile } from "./components/BecomeSellerLegalProfile";

export const BecomeSellerModule = () => {
  const step = useBecomeSellerStore((state) => state.step);

  return (
    <React.Fragment>
      <BasicPageHeader
        title="Создание магазина"
        shownBackArrowButton
        backButtonLink="/seller"
      />
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          <Grid size={12}>
            {step === 1 && <BecomeSellerProfile />}
            {step === 2 && <BecomeSellerLegalProfile />}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
