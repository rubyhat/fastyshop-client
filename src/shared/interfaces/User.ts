/**
 * Перечисление ролей пользователей
 * @enum {string} USER - Пользователь
 * @enum {string} ADMIN - Админ
 * @enum {string} DISPATCHER - Диспетчер
 */
export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
  DISPATCHER = "DISPATCHER",
}

/**
 * Отображаемый текст для ролей пользователей
 * @enum {string} USER - Пользователь
 * @enum {string} ADMIN - Админ
 * @enum {string} DISPATCHER - Диспетчер
 */
export enum UserRoleDisplayText {
  USER = "Пользователь",
  ADMIN = "Админ",
  DISPATCHER = "Диспетчер",
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
