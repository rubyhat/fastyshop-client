import { Box } from "@mui/material";
import toast from "react-hot-toast";
import { BasicDrawer } from "../BasicDrawer";
import { LegalProfileFormModule } from "../../../modules/LegalProfileFormModule";

interface CreateLegalProfileDrawerProps {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

export const CreateLegalProfileDrawer = ({
  isOpen,
  setIsOpen,
}: CreateLegalProfileDrawerProps) => {
  const handleClickReturnButton = () => {
    setIsOpen(false);
  };

  const handleSuccessCallBack = () => {
    setIsOpen(false);
    toast.success("Новый юридический профиль успешно создан!");
  };

  return (
    <BasicDrawer
      title="Создание юридического профиля"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <Box px={2}>
        <LegalProfileFormModule
          submitButtonLabel="Сохранить"
          onClickReturnButton={handleClickReturnButton}
          onSuccessCallback={handleSuccessCallBack}
        />
      </Box>
    </BasicDrawer>
  );
};
