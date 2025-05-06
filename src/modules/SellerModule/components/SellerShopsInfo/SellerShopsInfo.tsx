import { useNavigate } from "react-router-dom";
import { Box, Button, Chip, Paper, Skeleton, Typography } from "@mui/material";
import { useGetAllShopsOfUser } from "../../../../shared/hooks";
import { AxiosErrorAlertMessage } from "../../../../shared/components/AxiosErrorAlertMessage";
import { cardHeaderStyles, cardStyles, cardWrapperStyles } from "./styles";
import { useSellerStore } from "../../store";

export const SellerShopsInfo = () => {
  const navigate = useNavigate();
  const setShowCreateShopDrawer = useSellerStore(
    (state) => state.setShowCreateShopDrawer,
  );

  const {
    data: dataShops,
    isSuccess: isSuccessShops,
    isLoading: isLoadingShops,
    isError: isErrorShops,
    error: errorShops,
  } = useGetAllShopsOfUser();

  if (isLoadingShops) {
    return (
      <Skeleton variant="rounded" width="100%" height={166} sx={{ mt: 1 }} />
    );
  }

  if (isSuccessShops && dataShops) {
    return (
      <Box sx={cardWrapperStyles} pt={1}>
        {dataShops.map((shop) => {
          const isShopActive = shop.is_active;
          return (
            <Box
              key={shop.id}
              sx={cardStyles}
              component={Paper}
              onClick={() => navigate("/shops/" + shop.id)}
            >
              <Box sx={cardHeaderStyles}>
                <Box>
                  <Typography component="p" variant="body1" fontWeight={700}>
                    {shop.title}
                  </Typography>
                  <Typography
                    component="p"
                    variant="caption"
                    color="customColors.labelsSecondary"
                  >
                    {shop.shop_category.title}
                  </Typography>
                </Box>
                <Chip
                  size="small"
                  sx={{ fontSize: 11 }}
                  color={isShopActive ? "success" : "error"}
                  label={isShopActive ? "Включен" : "Отключен"}
                />
              </Box>
              <Typography component="p" variant="body2">
                {shop.legal_profile.company_name}
              </Typography>
            </Box>
          );
        })}
        <Button
          variant="outlined"
          color="success"
          onClick={() => setShowCreateShopDrawer(true)}
        >
          + Создать новый
        </Button>
      </Box>
    );
  }

  if (isErrorShops && errorShops) {
    return <AxiosErrorAlertMessage error={errorShops} />;
  }

  return null;
};
