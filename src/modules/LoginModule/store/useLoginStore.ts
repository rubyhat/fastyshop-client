import { create } from "zustand";
import Cookies from "js-cookie";
import { UserRole } from "../../../shared/interfaces";
import { decodeToken } from "../../../shared/utils";

/**
 * Интерфейс хранилища состояния аутентификации.
 * Используется для управления токеном доступа и последним посещённым URL.
 */
interface LoginStore {
  /** Токен доступа пользователя */
  accessToken: string | null;

  /** Последний посещённый URL перед авторизацией */
  lastVisitedUrl: string | null;

  /**
   * Устанавливает токен доступа и, при наличии, обновляет refresh-токен в cookies.
   * @param token Новый токен доступа или `null`
   * @param refreshToken (Необязательно) Новый refresh-токен
   */
  setAccessToken: (token: string | null, refreshToken?: string | null) => void;

  /**
   * Устанавливает последний посещённый URL перед авторизацией.
   * @param url URL страницы, на которую пользователь пытался перейти
   */
  setLastVisitedUrl: (url: string | null) => void;

  /**
   * Выполняет выход из системы: удаляет токены и сбрасывает состояние.
   */
  logout: () => void;

  /** Логин пользователя в системе */
  username: string | null;

  /** Роль пользователя в системе */
  role: UserRole | null;
}

/** Время жизни refresh-токена в cookies (в днях) */
const TOKEN_LIFE_TIME = 1;

/**
 * Zustand-хранилище для управления аутентификацией пользователя.
 *
 * Позволяет хранить и обновлять токен доступа, последний посещённый URL,
 * а также выполнять выход из системы.
 */
export const useLoginStore = create<LoginStore>((set) => ({
  accessToken: null,
  lastVisitedUrl: null,
  username: null,
  role: null,

  setAccessToken: (accessToken, refreshToken) => {
    set({ accessToken });

    /** Сохраняем токен в куки */
    if (refreshToken) {
      Cookies.set("refresh_token", refreshToken, {
        expires: TOKEN_LIFE_TIME,
        secure: true,
        sameSite: "Strict",
      });
    }

    /** Сохраняем данные о пользователе в стейт */
    if (accessToken) {
      const decoded = decodeToken(accessToken);
      if (decoded) {
        set({ username: decoded.username, role: decoded.role_name });
      }
    }
  },

  setLastVisitedUrl: (url) => {
    set({ lastVisitedUrl: url });
  },

  logout: () => {
    set({ accessToken: null, lastVisitedUrl: null });
    Cookies.remove("refresh_token");
  },
}));
