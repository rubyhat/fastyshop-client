import toast from "react-hot-toast";
import { Box } from "@mui/material";

import { BasicDrawer } from "../../../../shared/components/BasicDrawer";
import { LegalProfileFormModule } from "../../../LegalProfileFormModule";
import { useBecomeSellerStore } from "../../store";

export const BecomeSellerCreateLegalProfileDrawer = () => {
  const showCreateLegalProfileDrawer = useBecomeSellerStore(
    (state) => state.showCreateLegalProfileDrawer,
  );
  const setShowCreateLegalProfileDrawer = useBecomeSellerStore(
    (state) => state.setShowCreateLegalProfileDrawer,
  );

  const handleClickReturnButton = () => {
    setShowCreateLegalProfileDrawer(false);
  };

  const handleSuccessCallBack = () => {
    setShowCreateLegalProfileDrawer(false);
    toast.success("Новый юридический профиль успешно создан!");
  };

  return (
    <BasicDrawer
      title="Создание юридического профиля"
      isOpen={showCreateLegalProfileDrawer}
      setIsOpen={setShowCreateLegalProfileDrawer}
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
