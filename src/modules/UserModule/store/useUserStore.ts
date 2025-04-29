import { create } from "zustand";
import { User } from "../../../shared/interfaces";
import { UserRole } from "../../../shared/permissions/roles";

interface UserStore {
  /** Полный профиль пользователя из /me */
  profile: User | null;

  /** Роль пользователя — отдельно, для быстрого доступа */
  role: UserRole | null;

  /** Устанавливает профиль пользователя */
  setUserProfile: (user: User) => void;

  /** Устанавливает данные из access_token (например: phone, role) */
  setUserFromToken: (data: Partial<Pick<User, "phone" | "role">>) => void;

  /** Очищает профиль пользователя */
  clearUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  profile: null,
  role: null,

  setUserProfile: (user) => {
    set({
      profile: user,
      role: user.role,
    });
  },

  setUserFromToken: (data) => {
    set((state) => ({
      role: data.role ?? state.role,
      profile: {
        ...state.profile,
        phone: data.phone ?? state.profile?.phone ?? "",
        role: data.role ?? state.profile?.role ?? "user",
      } as User,
    }));
  },

  clearUser: () => set({ profile: null, role: null }),
}));
