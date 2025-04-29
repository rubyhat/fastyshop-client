import { UserRole } from "../permissions/roles";
import { CountryCode } from "./Country";

export interface User {
  id: string;
  phone: string;
  role: UserRole;
  country_code: CountryCode;
  is_active: boolean;
  email: string;
}
