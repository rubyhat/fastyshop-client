import { create } from "zustand";
import { ShopData } from "../../../shared/interfaces/Shop";

interface ShopDetailsStore {
  showShopSettingsDrawer: boolean;
  setShowShopSettingsDrawer: (v: boolean) => void;

  editingShop: ShopData | null;
  setEditingShop: (v: ShopData | null) => void;
}

export const useShopDetailsStore = create<ShopDetailsStore>((set) => ({
  showShopSettingsDrawer: false,
  setShowShopSettingsDrawer: (v) => set({ showShopSettingsDrawer: v }),

  editingShop: null,
  setEditingShop: (v) => set({ editingShop: v }),
}));
