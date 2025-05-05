import { CountryCode } from "./Country";

// todo: LegalProfileResponseData -> LegalProfile нужно ли переименовать?
export interface LegalProfileResponseData {
  id: string;
  company_name: string;
  tax_id: string;
  country_code: CountryCode;
  legal_address: string;
  legal_form: string;
  is_verified: boolean;
  seller_profile_id: string;
  created_at: Date;
  updated_at: Date;
}

export enum LegalForm {
  SELF = "SELF",
  IP = "IP",
  TOO = "TOO",
  TDO = "TDO",
  PT = "PT",
  AO = "AO",
  PK = "PK",
  GP = "GP",
  NON_PROFIT_ORG = "NON_PROFIT_ORG",
}

export enum LegalFormDisplayText {
  SELF = "Самозанятый",
  IP = "Индивидуальный Предприниматель",
  TOO = "Товарищество с ограниченной ответственностью",
  TDO = "Товарищество с доп. ответственностью",
  PT = "Полное товарищество",
  AO = "Акционерное общество",
  PK = "Производственный Кооператив",
  GP = "Государственное предприятие",
  NON_PROFIT_ORG = "Некоммерческая организация",
}
