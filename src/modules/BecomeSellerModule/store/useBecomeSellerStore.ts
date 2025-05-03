import { create } from "zustand";

interface BecomeSellerStore {
  /** Этап формы создания магазин
   * 1 - создание профиля продавца
   * 2 - создание юридического профиля
   * 3 - создания магазина
   */
  step: number;
  setStep: (v: number) => void;

  sellerProfileId: string | null;
  setSellerProfileId: (v: string | null) => void;

  /** Сброс формы в изначальное состояние при клике отмены или закрытии */
  resetForm: () => void;
}

const initialState = {
  step: 1,
  sellerProfileId: null,
};

export const useBecomeSellerStore = create<BecomeSellerStore>((set) => ({
  ...initialState,
  setSellerProfileId: (v) => set({ sellerProfileId: v }),
  setStep: (v) => set({ step: v }),

  resetForm: () => set(initialState),
}));
