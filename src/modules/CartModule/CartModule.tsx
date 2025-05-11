import React from "react";
import { Container, Grid } from "@mui/material";
import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";
import { CartEmpty } from "./components/CartEmpty";

export const CartModule = () => {
  return (
    <React.Fragment>
      <BasicPageHeader title="Корзина" shownBackArrowButton />
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <CartEmpty />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
