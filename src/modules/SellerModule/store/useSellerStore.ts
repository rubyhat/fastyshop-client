import { create } from "zustand";

interface SellerStore {
  showCreateLegalProfileDrawer: boolean;
  setShowCreateLegalProfileDrawer: (v: boolean) => void;

  showCreateShopDrawer: boolean;
  setShowCreateShopDrawer: (v: boolean) => void;
}

export const useSellerStore = create<SellerStore>((set) => ({
  showCreateLegalProfileDrawer: false,
  setShowCreateLegalProfileDrawer: (v) =>
    set({ showCreateLegalProfileDrawer: v }),
  showCreateShopDrawer: false,
  setShowCreateShopDrawer: (v) => set({ showCreateShopDrawer: v }),
}));
