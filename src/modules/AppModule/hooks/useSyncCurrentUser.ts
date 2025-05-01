// 📁 shared/hooks/useSyncCurrentUser.ts
import React from "react";
import { useGetCurrentUserQuery } from "../../UserModule/hooks";
import { useUserStore } from "../../UserModule/store";
import { useLoginStore } from "../../LoginModule/store";

/**
 * Хук, который автоматически загружает данные пользователя из API `/me`
 * и синхронизирует их с UserStore.
 */
export const useSyncCurrentUser = () => {
  const { accessToken } = useLoginStore();
  const { data, isSuccess } = useGetCurrentUserQuery(!!accessToken);
  const setUserProfile = useUserStore((s) => s.setUserProfile);

  React.useEffect(() => {
    if (isSuccess && data) {
      setUserProfile(data);
    }
  }, [isSuccess, data, setUserProfile, accessToken]);
};
