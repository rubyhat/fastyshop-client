import { BasicDrawer } from "../../../../shared/components/BasicDrawer";
import { useProfileDetailsStore } from "../../store/useProfileDetailsStore";

export const ProfileDetailsEditUserDrawer = () => {
  const { showEditProfileDrawer, setShowEditProfileDrawer } =
    useProfileDetailsStore();
  return (
    <BasicDrawer
      title="Личные данные"
      isOpen={showEditProfileDrawer}
      setIsOpen={setShowEditProfileDrawer}
    >
      ProfileDetailsEditUserDrawer
    </BasicDrawer>
  );
};
