import { Box } from "@mui/material";
import toast from "react-hot-toast";

import { BasicDrawer } from "../BasicDrawer";
import { LegalProfileResponseData } from "../../interfaces";
import { LegalProfileFormModule } from "../../../modules/LegalProfileFormModule";

interface LegalProfileFormDrawerProps {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  mode: "create" | "update";
  editingProfile?: LegalProfileResponseData | null;
}

export const LegalProfileFormDrawer = ({
  mode,
  isOpen,
  setIsOpen,
  editingProfile = null,
}: LegalProfileFormDrawerProps) => {
  const handleClickReturnButton = () => {
    setIsOpen(false);
  };

  const handleSuccessCallBack = () => {
    setIsOpen(false);
    toast.success("Новый юридический профиль успешно создан!");
  };

  const drawerTitle = {
    create: "Создание юридического профиля",
    update: "Обновление юридического профиля",
  };

  return (
    <BasicDrawer
      title={drawerTitle[mode]}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <Box px={2} pb={2} height={1}>
        <LegalProfileFormModule
          mode={mode}
          editingProfile={editingProfile}
          submitButtonLabel="Сохранить"
          onClickReturnButton={handleClickReturnButton}
          onSuccessCallback={handleSuccessCallBack}
        />
      </Box>
    </BasicDrawer>
  );
};
