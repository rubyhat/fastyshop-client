import { CountryCode } from "../interfaces/Country";

export const countrySelectOptions = (): {
  value: CountryCode;
  label: string;
}[] => {
  const countryList = [
    {
      value: CountryCode.KZ,
      label: "Казахстан",
    },
    {
      value: CountryCode.RU,
      label: "Россия",
    },
  ];

  return countryList;
};
