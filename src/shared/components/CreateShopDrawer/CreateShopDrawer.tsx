import toast from "react-hot-toast";
import { Box } from "@mui/material";
import { BasicDrawer } from "../BasicDrawer";
import { ShopFormModule } from "../../../modules/ShopFormModule";
import { useNavigate } from "react-router-dom";
import { ShopData } from "../../interfaces/Shop";

interface CreateShopDrawerProps {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

export const CreateShopDrawer = ({
  isOpen,
  setIsOpen,
}: CreateShopDrawerProps) => {
  const navigate = useNavigate();
  const handleClickReturnButton = () => {
    setIsOpen(false);
  };

  const handleSuccessCallBack = (response: ShopData) => {
    setIsOpen(false);
    navigate("/shops/" + response.id);
    toast.success("Новый магазин успешно создан!");
  };

  return (
    <BasicDrawer
      title="Создание магазина"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <Box px={2}>
        <ShopFormModule
          onClickReturnButton={handleClickReturnButton}
          onSuccessCallback={handleSuccessCallBack}
        />
      </Box>
    </BasicDrawer>
  );
};
