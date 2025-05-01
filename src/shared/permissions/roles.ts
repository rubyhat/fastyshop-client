/**
 * Перечисление ролей пользователей
 * @enum {string} user - Пользователь
 * @enum {string} seller - Продавец
 * @enum {string} superadmin - Админ
 * @enum {string} supermanager - Менеджер
 */
export enum UserRole {
  user = "user",
  seller = "seller",
  superadmin = "superadmin",
  supermanager = "supermanager",
}

/**
 * Отображаемый текст для ролей пользователей
 * @enum {string} user - Пользователь
 * @enum {string} seller - Продавец
 * @enum {string} superadmin - Админ
 * @enum {string} supermanager - Менеджер
 */
export enum UserRoleDisplayText {
  user = "Пользователь",
  seller = "Продавец",
  superadmin = "Админ",
  supermanager = "Менеджер",
}

export enum UserRoleColor {
  user = "default",
  seller = "info",
  superadmin = "error",
  supermanager = "warning",
}
