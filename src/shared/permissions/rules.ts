import { UserRole } from "./roles";

/**
 * Правила доступа по действиям.
 * Ключ — действие, значение — список разрешённых ролей.
 */

const allRoles = [
  UserRole.user,
  UserRole.seller,
  UserRole.supermanager,
  UserRole.superadmin,
];

export const accessRules = {
  viewAnalytics: [UserRole.superadmin, UserRole.supermanager],
  manageUsers: [UserRole.superadmin],
  createStore: [UserRole.seller],
  viewProfile: allRoles,
};
