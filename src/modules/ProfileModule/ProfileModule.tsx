import React from "react";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { ProfileInfoCard } from "./components/ProfileInfoCard";
import { ProfileFavoritesLinks } from "./components/ProfileFavoritesLinks";
import { version } from "../../../package.json";

import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";
import { BasicNavListToPage } from "../../shared/components/BasicNavListToPage";
import { useIsAuthenticated } from "../../shared/permissions/hooks";

const list = [
  { label: "Центр поддержки", link: "/help" },
  { label: "Соглашения и Правила", link: "/docs" },
];

export const ProfileModule = () => {
  const isAuthenticated = useIsAuthenticated();
  return (
    <React.Fragment>
      <BasicPageHeader
        title="Мой профиль"
        shownBackArrowButton
        backButtonLink="/"
      />
      <Container maxWidth={false}>
        {!isAuthenticated && (
          <Grid container spacing={2}>
            <Grid size={12}>
              <Box sx={{ py: 2, width: 1 }}>
                <Box component={Paper} sx={{ py: 4, px: 2 }}>
                  <Typography component="h6" variant="h6">
                    Упс, Вы не авторизованы ;(
                  </Typography>
                  <Typography component="p" variant="body1">
                    Создавайте магазины, продавайте и покупайте товары и услуги!
                  </Typography>
                  <Typography component="p" variant="body1" mt={1} mb={2}>
                    Для этого необходимо войти в систему или создать аккаунт :)
                  </Typography>
                  <Button
                    component={Link}
                    to="/login"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Войти/Создать аккаунт
                  </Button>
                </Box>
                <Typography component="p" variant="body2" mt={1} color="#aaa">
                  Версия платформы: {version}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        )}
        {isAuthenticated && (
          <Grid container spacing={2}>
            <Grid size={12}>
              <Box sx={{ py: 2, width: 1 }}>
                <ProfileInfoCard />
              </Box>
              <Box sx={{ pb: 2, width: 1 }}>
                <ProfileFavoritesLinks />
              </Box>
              <Box sx={{ width: 1 }}>
                <BasicNavListToPage list={list} />
                <Typography component="p" variant="body2" mt={1} color="#aaa">
                  Версия платформы: {version}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        )}
      </Container>
    </React.Fragment>
  );
};
