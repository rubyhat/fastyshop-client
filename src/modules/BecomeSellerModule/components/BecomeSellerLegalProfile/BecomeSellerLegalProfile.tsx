import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Box, Button, Paper, Typography } from "@mui/material";
import { useBecomeSellerStore } from "../../store";
import {
  LegalProfileFormData,
  legalProfileFormValidationSchema,
} from "../../validations/legalProfileFormValidationSchema";
import { usePostLegalProfileMutation } from "../../hooks";
import { devLogger } from "../../../../shared/utils";
import { BasicTextField } from "../../../../shared/components/BasicTextField";
import { BasicFormSelectField } from "../../../../shared/components/BasicFormSelectField";
import {
  countrySelectOptions,
  legalFormSelectOptions,
} from "../../../../shared/constants";
import { LegalForm } from "../../../../shared/interfaces";

export const BecomeSellerLegalProfile = () => {
  const setStep = useBecomeSellerStore((state) => state.setStep);

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

  const legalProfileMutation = usePostLegalProfileMutation();

  const onSubmit = (data: LegalProfileFormData) => {
    devLogger.log(data);
    legalProfileMutation.mutate(data);
  };

  const handleResetForm = () => {
    reset();
    setStep(1);
  };

  return (
    <Box py={2}>
      <Box component={Paper} sx={{ p: 2 }}>
        <Typography component="h6" variant="h6">
          Юридический профиль
        </Typography>
        <Typography
          component="p"
          variant="body2"
          color="customColors.labelsSecondary"
        >
          Эти данные будут закреплены за магазином
        </Typography>
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
                  Страна деятельности компании. От выбранной страны будут
                  зависеть некоторые системные настройки согласно
                  законодательству выбранной страны.
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
                    [LegalForm.SELF, LegalForm.IP].includes(
                      legalForm as LegalForm,
                    )
                      ? "ИИН"
                      : "БИН"
                  }
                  placeholder={
                    [LegalForm.SELF, LegalForm.IP].includes(
                      legalForm as LegalForm,
                    )
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
            <Box
              sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}
            >
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
                Продолжить
              </Button>
            </Box>
          </Box>
        </FormProvider>
      </Box>
    </Box>
  );
};
