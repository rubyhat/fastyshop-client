import { Box, Paper, Skeleton, Typography } from "@mui/material";
import { useGetSellerProfileByUserIdQuery } from "../../../../shared/hooks";
import { AxiosErrorAlertMessage } from "../../../../shared/components/AxiosErrorAlertMessage";
import { useNavigate } from "react-router-dom";
import { boxItemStyles, boxWrapperStyles } from "./styles";
import React from "react";

interface SellerProfileInfoProps {
  userId: string;
}

export const SellerProfileInfo = ({ userId }: SellerProfileInfoProps) => {
  const navigate = useNavigate();
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
          <Box
            onClick={() => navigate("/shops")}
            sx={boxItemStyles}
            component={Paper}
          >
            <Typography component="p" variant="body2" fontWeight={700}>
              Всего заказов
            </Typography>
            <Typography component="p" variant="body2">
              1234
            </Typography>
          </Box>
          <Box sx={boxItemStyles} component={Paper}>
            <Typography component="p" variant="body2" fontWeight={700}>
              Покупателей
            </Typography>
            <Typography component="p" variant="body2">
              123456
            </Typography>
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
