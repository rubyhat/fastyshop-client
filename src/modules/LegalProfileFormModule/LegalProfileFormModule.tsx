import { Alert, Box, Button } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import {
  LegalProfileFormData,
  legalProfileFormValidationSchema,
} from "./validations";
import { usePostLegalProfileMutation } from "./hooks";

import { devLogger } from "../../shared/utils";
import { BasicFormSelectField } from "../../shared/components/BasicFormSelectField";
import { BasicTextField } from "../../shared/components/BasicTextField";
import { LegalForm, LegalProfileResponseData } from "../../shared/interfaces";
import {
  countrySelectOptions,
  legalFormSelectOptions,
} from "../../shared/constants";

interface LegalProfileFormModuleProps {
  submitButtonLabel?: string;
  onClickReturnButton: () => void;
  onSuccessCallback?: (response: LegalProfileResponseData) => void;
}

export const LegalProfileFormModule = ({
  submitButtonLabel = "Продолжить",
  onClickReturnButton,
  onSuccessCallback,
}: LegalProfileFormModuleProps) => {
  const methods = useForm<LegalProfileFormData>({
    resolver: zodResolver(legalProfileFormValidationSchema),
    defaultValues: {
      country_code: "",
      legal_form: "",
      company_name: "",
      legal_address: "",
      tax_id: "",
    },
  });

  const { handleSubmit, reset, watch } = methods;
  const legalForm = watch("legal_form");

  const legalProfileMutation = usePostLegalProfileMutation({
    onSuccessCallback,
  });

  const onSubmit = (data: LegalProfileFormData) => {
    legalProfileMutation.mutate(data);
  };

  const handleResetForm = () => {
    reset();
    onClickReturnButton();
  };

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit, (errors) =>
          devLogger.error("Ошибки валидации:", errors),
        )}
        sx={{ pt: 2, display: "flex", flexDirection: "column", height: 1 }}
      >
        <Box flexGrow={1}>
          <Box sx={{ pb: 2 }}>
            <BasicFormSelectField
              name="legal_form"
              label="Юридическая форма:"
              placeholder="Укажите юридическую форму компании"
              data={legalFormSelectOptions()}
              disabled={false}
            />
          </Box>
          <Box sx={{ pb: 2 }}>
            <BasicFormSelectField
              name="country_code"
              label="Страна:"
              placeholder="Выберите страну"
              data={countrySelectOptions()}
              disabled={false}
            />
            <Alert severity="info" sx={{ mt: 2 }}>
              Страна деятельности компании. От выбранной страны будут зависеть
              некоторые системные настройки согласно законодательству выбранной
              страны.
            </Alert>
          </Box>
          <Box pb={2}>
            <BasicTextField<LegalProfileFormData>
              name="company_name"
              label="Название компании"
              placeholder="Введите название компании"
              disabled={legalProfileMutation.isPending}
            />
          </Box>
          <Box pb={2}>
            <BasicTextField<LegalProfileFormData>
              name="tax_id"
              label={
                [LegalForm.SELF, LegalForm.IP].includes(legalForm as LegalForm)
                  ? "ИИН"
                  : "БИН"
              }
              placeholder={
                [LegalForm.SELF, LegalForm.IP].includes(legalForm as LegalForm)
                  ? "Введите ИИН"
                  : "Введите БИН"
              }
              disabled={legalProfileMutation.isPending}
            />
          </Box>
          <Box pb={2}>
            <BasicTextField<LegalProfileFormData>
              name="legal_address"
              label="Адрес компании"
              placeholder="Казахстан, г. Астана, ул. Гоголя 123, офис 42"
              multiline
              minRows={4}
              disabled={legalProfileMutation.isPending}
            />
          </Box>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleResetForm}
            disabled={legalProfileMutation.isPending}
          >
            Назад
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={legalProfileMutation.isPending}
          >
            {submitButtonLabel}
          </Button>
        </Box>
      </Box>
    </FormProvider>
  );
};
