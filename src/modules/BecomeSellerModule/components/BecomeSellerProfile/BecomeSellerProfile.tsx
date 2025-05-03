import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Box, Button, Paper, Typography } from "@mui/material";

import {
  SellerProfileFormData,
  sellerProfileFormValidationSchema,
} from "../../validations/sellerProfileFormValidationSchema";
import { usePostSellerProfileMutation } from "../../hooks";

import { BasicTextField } from "../../../../shared/components/BasicTextField";
import { devLogger } from "../../../../shared/utils";
import { useBecomeSellerStore } from "../../store";

export const BecomeSellerProfile = () => {
  const navigate = useNavigate();
  const resetForm = useBecomeSellerStore((state) => state.resetForm);
  const methods = useForm<SellerProfileFormData>({
    resolver: zodResolver(sellerProfileFormValidationSchema),
    defaultValues: { display_name: "", description: "" },
  });

  const { handleSubmit, reset } = methods;
  const sellerProfileMutation = usePostSellerProfileMutation();

  const onSubmit = (data: SellerProfileFormData) => {
    devLogger.log(data);
    sellerProfileMutation.mutate(data);
  };

  const handleResetForm = () => {
    reset();
    resetForm();
    navigate("/profile");
  };

  return (
    <Box py={2}>
      <Box component={Paper} sx={{ p: 2 }}>
        <Typography component="h6" variant="h6">
          Профиль продавца
        </Typography>
        <Typography
          component="p"
          variant="body2"
          color="customColors.labelsSecondary"
        >
          Расскажите немного о своем магазине
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
              <Box pb={2}>
                <BasicTextField<SellerProfileFormData>
                  name="display_name"
                  label="Название профиля продавца"
                  placeholder="Введите название профиля"
                  disabled={sellerProfileMutation.isPending}
                />
              </Box>
              <Box pb={2}>
                <BasicTextField<SellerProfileFormData>
                  name="description"
                  label="Описание профиля продавца"
                  placeholder="Расскажите немного о своей деятельности потенциальным покупателям"
                  multiline
                  minRows={4}
                  disabled={sellerProfileMutation.isPending}
                />
                <Typography
                  component="p"
                  variant="body2"
                  color="customColors.labelsSecondary"
                  mt={1}
                >
                  Вы сможете отредактировать описание в любое время
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={handleResetForm}
                disabled={sellerProfileMutation.isPending}
              >
                Отмена
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={sellerProfileMutation.isPending}
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
