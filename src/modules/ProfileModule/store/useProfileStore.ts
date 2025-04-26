import { create } from "zustand";

export type ProfileViewMode = "orders" | "shops";

interface ProfileStore {
  profileViewMode: ProfileViewMode;
  setProfileViewMode: (v: ProfileViewMode) => void;
}

export const useProfileStore = create<ProfileStore>((set) => ({
  profileViewMode: "orders",
  setProfileViewMode: (v) => set({ profileViewMode: v }),
}));
