import toast from "react-hot-toast";
import { Box } from "@mui/material";
import { BasicDrawer } from "../BasicDrawer";
import { ShopFormModule } from "../../../modules/ShopFormModule";
import { useNavigate } from "react-router-dom";
import { ShopData } from "../../interfaces/Shop";

interface ShopDrawerProps {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  mode: "create" | "update";
  editingShop?: ShopData | null;
}

export const ShopDrawer = ({
  mode = "create",
  editingShop = null,
  isOpen,
  setIsOpen,
}: ShopDrawerProps) => {
  const navigate = useNavigate();
  const handleClickReturnButton = () => {
    setIsOpen(false);
  };

  const handleSuccessCallBack = (response: ShopData) => {
    setIsOpen(false);
    navigate("/shops/" + response.id);
    if (mode === "create") {
      toast.success("Новый магазин успешно создан!");
    }

    if (mode === "update") {
      toast.success("Магазин успешно обновлен!");
    }
  };

  const drawerTitle = {
    create: "Создание магазина",
    update: "Редактирование магазина",
  };

  return (
    <BasicDrawer
      title={drawerTitle[mode]}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <Box px={2} pb={2} height={1}>
        <ShopFormModule
          onClickReturnButton={handleClickReturnButton}
          onSuccessCallback={handleSuccessCallBack}
          mode={mode}
          editingShop={editingShop}
        />
      </Box>
    </BasicDrawer>
  );
};
