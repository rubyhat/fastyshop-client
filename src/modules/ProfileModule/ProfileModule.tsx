import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";
import { ProfileToggleButtons } from "./components/ProfileToggleButtons";
import { useProfileStore } from "./store";
import { ProfileOrders } from "./components/ProfileOrders";
import { ProfileShops } from "./components/ProfileShops";

export const ProfileModule = () => {
  const profileViewMode = useProfileStore((state) => state.profileViewMode);

  return (
    <React.Fragment>
      <BasicPageHeader title="Мой профиль" />
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Box sx={{ p: 2, width: 1 }}>
              <ProfileToggleButtons />
            </Box>
          </Grid>
          <Grid size={12}>
            {profileViewMode === "orders" && <ProfileOrders />}
            {profileViewMode === "shops" && <ProfileShops />}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
