import { axiosBaseWrap } from "../../../configs/api";
import { LoginRequestData, LoginResponseData } from "../interfaces";

/**
 * API-модуль для аутентификации пользователя.
 */
export const apiLoginModule = {
  /**
   * Отправляет запрос на авторизацию и получает токен доступа.
   *
   * @param {LoginRequestData} data Данные для авторизации (логин и пароль).
   * @returns {Promise<LoginResponseData>} Промис с данными токена.
   * @throws Ошибка, если запрос не удался.
   */
  postLogin(data: LoginRequestData): Promise<LoginResponseData> {
    return axiosBaseWrap
      .post<LoginResponseData>("/auth/token/basic", data)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },

  /**
   * Отправляет запрос на обновление токена с использованием refresh-токена.
   *
   * @param {string} refreshToken Токен обновления (`refresh_token`).
   * @returns {Promise<LoginResponseData>} Промис с новыми токенами.
   * @throws Ошибка, если запрос не удался.
   */
  patchLoginRefresh(refreshToken: string): Promise<LoginResponseData> {
    return axiosBaseWrap
      .patch(
        "/auth/token/refresh",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${refreshToken}`,
          },
        },
      )
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
};
