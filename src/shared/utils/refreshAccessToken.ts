import Cookies from "js-cookie";
import toast from "react-hot-toast";

import { apiLoginModule } from "../../modules/LoginModule/api";
import { useLoginStore } from "../../modules/LoginModule/store";
import { LoginResponseData } from "../../modules/LoginModule/interfaces";

/**
 * Функция для обновления `access_token`
 * @returns Новый `access_token` или `null`, если обновление не удалось.
 */
export const refreshAccessToken =
  async (): Promise<LoginResponseData | null> => {
    try {
      const refreshToken = Cookies.get("refresh_token");
      if (!refreshToken) {
        throw new Error("Отсутствует refresh_token, требуется повторный вход.");
      }

      const { access_token, refresh_token } =
        await apiLoginModule.postLoginRefresh(refreshToken);
      useLoginStore.getState().setAccessToken(access_token, refresh_token);
      return { access_token, refresh_token };
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Ошибка обновления токена:", error);
      toast.error("Сессия истекла. Войдите снова.");
      useLoginStore.getState().logout();
      return null;
    }
  };
