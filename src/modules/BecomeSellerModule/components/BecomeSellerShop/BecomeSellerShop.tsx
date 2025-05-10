import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography } from "@mui/material";

import { useBecomeSellerStore } from "../../store";
import { ShopFormModule } from "../../../ShopFormModule";
import { ShopData } from "../../../../shared/interfaces/Shop";

interface BecomeSellerShopProps {
  returnToProfile?: boolean;
}

export const BecomeSellerShop = ({
  returnToProfile = false,
}: BecomeSellerShopProps) => {
  const navigate = useNavigate();
  const setStep = useBecomeSellerStore((state) => state.setStep);
  const resetForm = useBecomeSellerStore((state) => state.resetForm);

  const handleSuccessCallBack = (response: ShopData) => {
    navigate("/shops/" + response.id);
    resetForm();
    toast.success("Новый магазин успешно создан!");
  };

  const handleClickReturnButton = () => {
    return returnToProfile ? navigate("/profile") : setStep(1);
  };

  return (
    <Box pt={2} pb={5}>
      <Box component={Paper} sx={{ p: 2 }}>
        <Typography component="h6" variant="h6">
          Создание магазина
        </Typography>
        <Typography
          component="p"
          variant="body2"
          color="customColors.labelsSecondary"
        >
          Настройки будущего магазина
        </Typography>
        <ShopFormModule
          mode="create"
          editingShop={null}
          onClickReturnButton={handleClickReturnButton}
          onSuccessCallback={handleSuccessCallBack}
        />
      </Box>
    </Box>
  );
};
