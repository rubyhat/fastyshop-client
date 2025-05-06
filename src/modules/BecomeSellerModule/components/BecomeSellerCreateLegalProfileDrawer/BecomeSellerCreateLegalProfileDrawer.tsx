import { useBecomeSellerStore } from "../../store";
import { CreateLegalProfileDrawer } from "../../../../shared/components/CreateLegalProfileDrawer";

export const BecomeSellerCreateLegalProfileDrawer = () => {
  const showCreateLegalProfileDrawer = useBecomeSellerStore(
    (state) => state.showCreateLegalProfileDrawer,
  );
  const setShowCreateLegalProfileDrawer = useBecomeSellerStore(
    (state) => state.setShowCreateLegalProfileDrawer,
  );

  return (
    <CreateLegalProfileDrawer
      isOpen={showCreateLegalProfileDrawer}
      setIsOpen={setShowCreateLegalProfileDrawer}
    />
  );
};
