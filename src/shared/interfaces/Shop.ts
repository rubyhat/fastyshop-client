export enum ShopType {
  online = "online",
  hybrid = "hybrid",
  offline = "offline",
}

export enum ShopTypeDisplayText {
  online = "Онлайн",
  hybrid = "Гибрид",
  offline = "Оффлайн",
}

const onlineDesc =
  "Онлайн магазин не имеющий физического адреса для покупателей. Например: digital услуги или товары, дропшипинг, самозанятые.";

const hybridDesc =
  "Магазин гибридного формата, который работает как онлайн, так и имеет физический адрес для оффлайн посещения.";

const offlineDesc = "Магазин преимущественно оффлайн формата";

export enum ShopTypeDescription {
  online = onlineDesc,
  hybrid = hybridDesc,
  offline = offlineDesc,
}

export interface ShopCategory {
  id: string;
  title: string;
  name: string;
  description: string;
  icon: string;
  position: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ShopSellerProfileData {
  id: string;
  display_name: string;
  created_at: string;
}
export interface ShopLegalProfileData {
  id: string;
  company_name: string;
  created_at: string;
}

export interface ShopShopCategoryData {
  id: string;
  title: string;
  name: string;
}

export interface ShopData {
  id: string;
  title: string;
  slug: string;
  contact_phone: string;
  contact_email: string;
  physical_address: string;
  is_active: boolean;
  shop_type: ShopType;
  seller_profile: ShopSellerProfileData;
  legal_profile: ShopLegalProfileData;
  shop_category: ShopShopCategoryData;
}
