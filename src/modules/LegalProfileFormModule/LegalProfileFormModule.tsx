import React from "react";
import toast from "react-hot-toast";
import { Alert, Box, Button } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import {
  LegalProfileFormData,
  legalProfileFormValidationSchema,
} from "./validations";
import {
  usePatchLegalProfileMutation,
  usePostLegalProfileMutation,
} from "./hooks";

import { devLogger } from "../../shared/utils";
import { BasicFormSelectField } from "../../shared/components/BasicFormSelectField";
import { BasicTextField } from "../../shared/components/BasicTextField";
import { LegalForm, LegalProfileResponseData } from "../../shared/interfaces";
import {
  countrySelectOptions,
  legalFormSelectOptions,
} from "../../shared/constants";

interface LegalProfileFormModuleProps {
  mode: "create" | "update";
  editingProfile?: LegalProfileResponseData | null;
  submitButtonLabel?: string;
  onClickReturnButton: () => void;
  onSuccessCallback?: (response: LegalProfileResponseData) => void;
}

export const LegalProfileFormModule = ({
  mode,
  editingProfile,
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

  React.useEffect(() => {
    if (mode === "update" && editingProfile) {
      reset({
        company_name: editingProfile.company_name,
        tax_id: editingProfile.tax_id,
        country_code: editingProfile.country_code,
        legal_form: editingProfile.legal_form,
        legal_address: editingProfile.legal_address,
      });
    }
  }, [mode, editingProfile, reset]);

  const createLegalProfileMutation = usePostLegalProfileMutation({
    onSuccessCallback,
  });

  const patchLegalProfileMutation = usePatchLegalProfileMutation({
    onSuccessCallback,
  });

  const isFormDisabled =
    createLegalProfileMutation.isPending || patchLegalProfileMutation.isPending;

  const onSubmit = (data: LegalProfileFormData) => {
    if (mode === "update" && !editingProfile) {
      toast.error(
        "Профиль для редактирования не найден, обновите страницу и попробуйте еще раз",
      );
    }

    if (mode === "create") {
      createLegalProfileMutation.mutate(data);
    }

    if (mode === "update" && editingProfile) {
      patchLegalProfileMutation.mutate({ data, id: editingProfile.id });
    }
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
              disabled={isFormDisabled}
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
              disabled={isFormDisabled}
            />
          </Box>
          <Box pb={2}>
            <BasicTextField<LegalProfileFormData>
              name="legal_address"
              label="Адрес компании"
              placeholder="Казахстан, г. Астана, ул. Гоголя 123, офис 42"
              multiline
              minRows={4}
              disabled={isFormDisabled}
            />
          </Box>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleResetForm}
            disabled={isFormDisabled}
          >
            Назад
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={isFormDisabled}
          >
            {submitButtonLabel}
          </Button>
        </Box>
      </Box>
    </FormProvider>
  );
};
