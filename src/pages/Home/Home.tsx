import { Alert, Box, Container, Grid, Typography } from "@mui/material";

export const Home = () => {
  return (
    <Box component="section" data-testid="pageHome">
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Box sx={{ background: "#fff", p: 2, borderRadius: 2, mt: 2 }}>
              <Typography component="h1" variant="h4">
                FastyShop
              </Typography>
              <Typography component="p" variant="body2">
                Сервис создания интернет магазина в два клика. Быстро, удобно,
                доступно.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Alert severity="info">Сервис находится на этапе разработки</Alert>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
