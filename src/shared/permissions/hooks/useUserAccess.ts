import { useUserStore } from "../../../modules/UserModule/store";
import { useLoginStore } from "../../../modules/LoginModule/store";
import { UserRole } from "../roles";

export const useUserProfile = () => useUserStore((s) => s.profile);
export const useUserRole = () => useUserStore((s) => s.role);
export const useIsAuthenticated = () =>
  Boolean(useLoginStore((s) => s.accessToken));
export const useIsSeller = () => useUserRole() === UserRole.seller;
export const useIsAdmin = () => useUserRole() === UserRole.superadmin;
