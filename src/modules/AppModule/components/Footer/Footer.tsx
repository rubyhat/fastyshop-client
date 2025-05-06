import { Box, Container, Grid, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  // todo: подумать, на каких страницах вообще нужен футер?
  const location = useLocation();
  return (
    <Box
      component="footer"
      data-testid="footer"
      sx={{
        borderTop: "1px solid",
        borderColor: "#ccc",
        pb: location.pathname === "/" ? "80px" : 0,
      }}
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
