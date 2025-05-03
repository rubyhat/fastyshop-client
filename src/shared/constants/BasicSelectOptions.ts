import { LegalForm, LegalFormDisplayText } from "../interfaces";
import { CountryCode, CountryCodeDisplayText } from "../interfaces/Country";

export const countrySelectOptions = (): {
  value: CountryCode;
  label: CountryCodeDisplayText;
}[] => {
  const countryList = [
    {
      value: CountryCode.KZ,
      label: CountryCodeDisplayText[CountryCode.KZ],
    },
    {
      value: CountryCode.RU,
      label: CountryCodeDisplayText[CountryCode.RU],
    },
  ];

  return countryList;
};

export const legalFormSelectOptions = (): {
  value: LegalForm;
  label: LegalFormDisplayText;
}[] => {
  const legalFormList = [
    {
      value: LegalForm.SELF,
      label: LegalFormDisplayText[LegalForm.SELF],
    },
    {
      value: LegalForm.IP,
      label: LegalFormDisplayText[LegalForm.IP],
    },
    {
      value: LegalForm.TOO,
      label: LegalFormDisplayText[LegalForm.TOO],
    },
    {
      value: LegalForm.TDO,
      label: LegalFormDisplayText[LegalForm.TDO],
    },
    {
      value: LegalForm.PT,
      label: LegalFormDisplayText[LegalForm.PT],
    },
    {
      value: LegalForm.AO,
      label: LegalFormDisplayText[LegalForm.AO],
    },
    {
      value: LegalForm.PK,
      label: LegalFormDisplayText[LegalForm.PK],
    },
    {
      value: LegalForm.GP,
      label: LegalFormDisplayText[LegalForm.GP],
    },
    {
      value: LegalForm.NON_PROFIT_ORG,
      label: LegalFormDisplayText[LegalForm.NON_PROFIT_ORG],
    },
  ];

  return legalFormList;
};
