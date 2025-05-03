import React from "react";
import { Container, Grid } from "@mui/material";

import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";
import { useBecomeSellerStore } from "./store";
import { BecomeSellerProfile } from "./components/BecomeSellerProfile";

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
          <Grid size={12}>{step === 1 && <BecomeSellerProfile />}</Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
