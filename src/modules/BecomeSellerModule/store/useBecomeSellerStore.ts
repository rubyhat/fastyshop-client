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

  showLegalProfileFormDrawer: boolean;
  setShowLegalProfileFormDrawer: (v: boolean) => void;

  /** Сброс формы в изначальное состояние при клике отмены или закрытии */
  resetForm: () => void;
}

const initialState = {
  step: 1,
  sellerProfileId: null,
  legalProfileId: null,
  showLegalProfileFormDrawer: false,
};

export const useBecomeSellerStore = create<BecomeSellerStore>((set) => ({
  ...initialState,
  setShowLegalProfileFormDrawer: (v) => set({ showLegalProfileFormDrawer: v }),
  setLegalProfileId: (v) => set({ legalProfileId: v }),
  setSellerProfileId: (v) => set({ sellerProfileId: v }),
  setStep: (v) => set({ step: v }),

  resetForm: () => set(initialState),
}));
