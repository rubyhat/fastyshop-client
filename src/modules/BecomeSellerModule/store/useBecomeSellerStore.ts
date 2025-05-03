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

  legalProfileId: string | null;
  setLegalProfileId: (v: string | null) => void;

  /** Сброс формы в изначальное состояние при клике отмены или закрытии */
  resetForm: () => void;
}

const initialState = {
  step: 1,
  sellerProfileId: null,
  legalProfileId: null,
};

export const useBecomeSellerStore = create<BecomeSellerStore>((set) => ({
  ...initialState,
  setLegalProfileId: (v) => set({ legalProfileId: v }),
  setSellerProfileId: (v) => set({ sellerProfileId: v }),
  setStep: (v) => set({ step: v }),

  resetForm: () => set(initialState),
}));
