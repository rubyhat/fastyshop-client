import Cookies from "js-cookie";
import toast from "react-hot-toast";

import { apiLoginModule } from "../../modules/LoginModule/api";
import { useLoginStore } from "../../modules/LoginModule/store";

/**
 * Функция для обновления `access_token`
 * @returns Новый `access_token` или `null`, если обновление не удалось.
 */
export const refreshAccessToken = async (): Promise<string | null> => {
  try {
    const refreshToken = Cookies.get("refresh_token");
    if (!refreshToken) {
      throw new Error("Отсутствует refresh_token, требуется повторный вход.");
    }

    const { data } = await apiLoginModule.patchLoginRefresh(refreshToken);
    useLoginStore.setState({ accessToken: data.access_token });
    return data.access_token;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Ошибка обновления токена:", error);
    toast.error("Сессия истекла. Войдите снова.");
    useLoginStore.getState().logout();
    return null;
  }
};
