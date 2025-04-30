import React from "react";
import { Container, Grid } from "@mui/material";

import { ProfileDetailsAvatar } from "./components/ProfileDetailsAvatar";
import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";
import { BasicNavListToDrawer } from "../../shared/components/BasicNavListToDrawer";
import { useProfileDetailsStore } from "./store/useProfileDetailsStore";
import { BasicNavListToDrawerItem } from "../../shared/components/BasicNavListToDrawer/BasicNavListToDrawer";
import { ProfileDetailsEditUserDrawer } from "./components/ProfileDetailsEditUserDrawer";

export const ProfileDetailsModule = () => {
  const { setShowEditProfileDrawer } = useProfileDetailsStore();

  const navList: BasicNavListToDrawerItem[] = [
    { label: "Личные данные", onClick: () => setShowEditProfileDrawer(true) },
    {
      label: "Выйти из аккаунта",
      onClick: () => setShowEditProfileDrawer(true),
    },
  ];
  return (
    <React.Fragment>
      <BasicPageHeader title="Детали профиля" />
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <ProfileDetailsAvatar />
          </Grid>
          <Grid size={12}>
            <BasicNavListToDrawer list={navList} />
          </Grid>
        </Grid>
      </Container>
      <ProfileDetailsEditUserDrawer />
    </React.Fragment>
  );
};
