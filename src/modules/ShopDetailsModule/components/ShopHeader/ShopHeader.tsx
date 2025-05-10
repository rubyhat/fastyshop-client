import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { Box, IconButton, Paper, Typography } from "@mui/material";

import { useShopDetailsStore } from "../../store";
import {
  boxItemStyles,
  boxWrapperStyles,
  shopHeaderWrapperStyles,
} from "./styles";
import { ShopData } from "../../../../shared/interfaces/Shop";

interface ShopHeaderProps {
  dataShop: ShopData;
}

export const ShopHeader = ({ dataShop }: ShopHeaderProps) => {
  const setShowShopSettingsDrawer = useShopDetailsStore(
    (state) => state.setShowShopSettingsDrawer,
  );
  const setEditingShop = useShopDetailsStore((state) => state.setEditingShop);

  const handleCardClick = () => {
    setEditingShop(dataShop);
    setShowShopSettingsDrawer(true);
  };

  return (
    <Box pt={2}>
      <Box
        component={Paper}
        sx={shopHeaderWrapperStyles}
        onClick={handleCardClick}
      >
        <Box>
          <Typography component="h6" variant="h6" fontWeight={700}>
            {dataShop.title}
          </Typography>
          <Typography
            component="p"
            variant="caption"
            color="customColors.labelsPrimary"
          >
            Настройки магазина
          </Typography>
        </Box>
        <IconButton sx={{ ml: "auto" }}>
          <IoMdSettings color="#1c1c1c" />
        </IconButton>
      </Box>
      <Box sx={boxWrapperStyles}>
        <Box sx={boxItemStyles} component={Paper}>
          <Box component={Link} to={`/shops/${dataShop.id}/orders`}>
            <Typography
              component="p"
              variant="body2"
              fontWeight={700}
              color="customColors.labelsPrimary"
            >
              Заказы
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
              Покупатели
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
    </Box>
  );
};
