import { useParams } from "react-router-dom";
import { Box, Container, Grid, Skeleton } from "@mui/material";

import { useGetShopDetailsById } from "../../shared/hooks";
import { AxiosErrorAlertMessage } from "../../shared/components/AxiosErrorAlertMessage";
import { ShopHeader } from "./components/ShopHeader";
import React from "react";
import { BasicPageHeader } from "../../shared/components/Mobile/BasicPageHeader";

export const ShopDetailsModule = () => {
  const { id } = useParams();
  const {
    data: dataShop,
    isLoading: isLoadingShop,
    isSuccess: isSuccessShop,
    isError: isErrorShop,
    error: errorShop,
  } = useGetShopDetailsById(id);

  if (isLoadingShop) {
    return (
      <Box p={2}>
        <Skeleton variant="rounded" width="100%" height={166} sx={{ mt: 1 }} />
      </Box>
    );
  }

  if (dataShop && isSuccessShop) {
    return (
      <React.Fragment>
        <BasicPageHeader
          title="Просмотр магазина"
          shownBackArrowButton
          backButtonLink="/seller"
        />
        <Container maxWidth={false}>
          <Grid container spacing={2}>
            <Grid size={12}>
              <ShopHeader dataShop={dataShop} />
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }

  if (isErrorShop && errorShop) {
    return (
      <Box py={1}>
        <AxiosErrorAlertMessage error={errorShop} />
      </Box>
    );
  }

  return null;
};
