import React from "react";
import { Container, Grid } from "@mui/material";

import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";
import { useBecomeSellerStore } from "./store";
import { BecomeSellerProfile } from "./components/BecomeSellerProfile";
import { BecomeSellerLegalProfile } from "./components/BecomeSellerLegalProfile";
import { BecomeSellerShop } from "./components/BecomeSellerShop";
import { BecomeSellerCreateLegalProfileDrawer } from "./components/BecomeSellerCreateLegalProfileDrawer";
import { useIsSeller } from "../../shared/permissions/hooks";

export const BecomeSellerModule = () => {
  const step = useBecomeSellerStore((state) => state.step);
  const isSeller = useIsSeller();

  return (
    <React.Fragment>
      <BasicPageHeader
        title="Создание магазина"
        shownBackArrowButton
        backButtonLink="/seller"
      />
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          {isSeller ? (
            <Grid size={12}>
              <BecomeSellerShop returnToProfile />
            </Grid>
          ) : (
            <Grid size={12}>
              {step === 1 && <BecomeSellerProfile />}
              {step === 2 && <BecomeSellerLegalProfile />}
              {step === 3 && <BecomeSellerShop />}
            </Grid>
          )}
        </Grid>
      </Container>
      <BecomeSellerCreateLegalProfileDrawer />
    </React.Fragment>
  );
};
