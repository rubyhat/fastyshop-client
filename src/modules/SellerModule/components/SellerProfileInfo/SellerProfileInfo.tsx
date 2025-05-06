import { Box, Paper, Skeleton, Typography } from "@mui/material";
import { useGetSellerProfileByUserIdQuery } from "../../../../shared/hooks";
import { AxiosErrorAlertMessage } from "../../../../shared/components/AxiosErrorAlertMessage";
import { useNavigate } from "react-router-dom";
import { boxItemStyles, boxWrapperStyles } from "./styles";

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
    return <Skeleton variant="rounded" width="100%" height={50} />;
  }

  if (dataSellerProfile) {
    return (
      <Box component={Paper} p={2} mt={1}>
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
        <Box sx={boxWrapperStyles}>
          <Box onClick={() => navigate("/shops")} sx={boxItemStyles}>
            <Typography component="p" variant="body2" fontWeight={700}>
              Всего заказов
            </Typography>
            <Typography component="p" variant="body2">
              1234
            </Typography>
          </Box>
          <Box sx={boxItemStyles}>
            <Typography component="p" variant="body2" fontWeight={700}>
              Покупателей
            </Typography>
            <Typography component="p" variant="body2">
              123456
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }

  if (isErrorSellerProfile && errorSellerProfile) {
    return <AxiosErrorAlertMessage error={errorSellerProfile} />;
  }

  return null;
};
