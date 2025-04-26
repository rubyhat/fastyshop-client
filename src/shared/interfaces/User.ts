/**
 * Перечисление ролей пользователей
 * @enum {string} user - Пользователь
 * @enum {string} seller - Продавец
 * @enum {string} superadmin - Админ
 * @enum {string} supermanager - Менеджер
 - Диспетчер
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

/**
 * Статусы пользователей, правила обновления по порядку, то есть awaiting - approved - blocked
 * @enum {string} AWAITING - На проверке
 * @enum {string} APPROVED - Подтвержден
 * @enum {string} BLOCKED - Заблокирован
 */
export enum UserStatus {
  AWAITING = "AWAITING",
  APPROVED = "APPROVED",
  BLOCKED = "BLOCKED",
}

/**
 * Отображаемый текст для статуса пользователя
 * @enum {string} AWAITING - На проверке
 * @enum {string} APPROVED - Подтвержден
 * @enum {string} BLOCKED - Заблокирован
 */
export enum UserStatusDisplayText {
  AWAITING = "На проверке",
  APPROVED = "Подтвержден",
  BLOCKED = "Заблокирован",
}

/**
 * Тело запроса для смены статуса пользователя
 */
export interface UserChangeStatusRequestData {
  status: UserStatus;
  reason: string;
}
