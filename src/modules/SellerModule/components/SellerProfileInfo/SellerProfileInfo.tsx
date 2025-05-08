import React from "react";
import { Link } from "react-router-dom";
import { Box, Paper, Skeleton, Typography } from "@mui/material";

import { useGetSellerProfileByUserIdQuery } from "../../../../shared/hooks";
import { AxiosErrorAlertMessage } from "../../../../shared/components/AxiosErrorAlertMessage";
import { boxItemStyles, boxWrapperStyles } from "./styles";

interface SellerProfileInfoProps {
  userId: string;
}

export const SellerProfileInfo = ({ userId }: SellerProfileInfoProps) => {
  const {
    data: dataSellerProfile,
    isLoading: isLoadingSellerProfile,
    isError: isErrorSellerProfile,
    error: errorSellerProfile,
  } = useGetSellerProfileByUserIdQuery(userId);

  if (isLoadingSellerProfile) {
    return <Skeleton variant="rounded" width="100%" height={150} />;
  }

  if (dataSellerProfile) {
    return (
      <React.Fragment>
        <Box component={Paper} sx={{ p: 1.5, mt: 1, borderRadius: 2 }}>
          <Typography component="p" variant="h6" fontWeight={700}>
            {dataSellerProfile.display_name}
          </Typography>
          <Typography
            component="p"
            variant="body2"
            color="customColors.labelsSecondary"
          >
            {dataSellerProfile.description}
          </Typography>
        </Box>
        <Box sx={boxWrapperStyles}>
          <Box sx={boxItemStyles} component={Paper}>
            <Box component={Link} to="/shops">
              <Typography
                component="p"
                variant="body2"
                fontWeight={700}
                color="customColors.labelsPrimary"
              >
                Всего заказов
              </Typography>
              <Typography
                component="p"
                variant="body2"
                color="customColors.labelsPrimary"
              >
                1234
              </Typography>
            </Box>
          </Box>
          <Box sx={boxItemStyles} component={Paper}>
            <Box component={Link} to="#">
              <Typography
                component="p"
                variant="body2"
                fontWeight={700}
                color="customColors.labelsPrimary"
              >
                Покупателей
              </Typography>
              <Typography
                component="p"
                variant="body2"
                color="customColors.labelsPrimary"
              >
                123456
              </Typography>
            </Box>
          </Box>
        </Box>
      </React.Fragment>
    );
  }

  if (isErrorSellerProfile && errorSellerProfile) {
    return <AxiosErrorAlertMessage error={errorSellerProfile} />;
  }

  return null;
};
