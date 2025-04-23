import { Box, Container, Grid, Typography } from "@mui/material";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <Box
      component="footer"
      data-testid="footer"
      sx={{ borderTop: "1px solid", borderColor: "#ccc" }}
    >
      <Container maxWidth="xl">
        <Grid container>
          <Grid size={12}>
            <Box sx={{ py: 2 }}>
              <Typography component="p" variant="body1">
                © {currentYear}. FastyShop
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
