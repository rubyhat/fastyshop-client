import React from "react";
import { Container, Grid } from "@mui/material";

import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";
import { useBecomeSellerStore } from "./store";
import { BecomeSellerProfile } from "./components/BecomeSellerProfile";
import { BecomeSellerLegalProfile } from "./components/BecomeSellerLegalProfile";
import { BecomeSellerShop } from "./components/BecomeSellerShop";
import { BecomeSellerCreateLegalProfileDrawer } from "./components/BecomeSellerCreateLegalProfileDrawer";
import { useUserProfile } from "../../shared/permissions/hooks";
import { UserRole } from "../../shared/permissions/roles";

// todo: если пользователь уже имеет роль seller то отобразить сообщение
// что он уже продавец и предложить перейти в профиль для создания магазина
export const BecomeSellerModule = () => {
  const step = useBecomeSellerStore((state) => state.step);
  const profile = useUserProfile();

  return (
    <React.Fragment>
      <BasicPageHeader
        title="Создание магазина"
        shownBackArrowButton
        backButtonLink="/seller"
      />
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          {profile && profile.role === UserRole.seller ? (
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
