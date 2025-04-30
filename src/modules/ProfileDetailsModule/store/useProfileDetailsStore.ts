import { create } from "zustand";

interface ProfileDetailsStore {
  showEditProfileDrawer: boolean;
  setShowEditProfileDrawer: (v: boolean) => void;
}

export const useProfileDetailsStore = create<ProfileDetailsStore>((set) => ({
  showEditProfileDrawer: false,
  setShowEditProfileDrawer: (v) => set({ showEditProfileDrawer: v }),
}));
