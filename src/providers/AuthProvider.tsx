import React from "react";

import { useCheckToken } from "../modules/AppModule/hooks";

/**
 * Пропсы для компонента `AuthProvider`.
 */
interface AuthProviderProps {
  /**
   * Функция для обновления состояния загрузки.
   *
   * @param v `true`, если идёт проверка токена, иначе `false`
   */
  setIsLoading: (v: boolean) => void;
}

/**
 * Компонент-провайдер для проверки токена аутентификации.
 *
 * Использует `useCheckToken()` для проверки актуальности токена и
 * вызывает `setIsLoading`, чтобы обновить состояние загрузки.
 *
 * @param {AuthProviderProps} props Пропсы компонента
 * @returns `null`, так как этот провайдер не рендерит JSX
 */
export const AuthProvider = ({ setIsLoading }: AuthProviderProps) => {
  const { isLoading } = useCheckToken();

  React.useEffect(() => setIsLoading(isLoading), [isLoading, setIsLoading]);

  return null;
};
