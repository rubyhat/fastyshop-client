import { Box, Button, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { devLogger } from "../../shared/utils";
import { BasicTextField } from "../../shared/components/BasicTextField";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SellerProfileFormData,
  sellerProfileFormValidationSchema,
} from "./validations";
import { usePostSellerProfileMutation } from "./hooks";
import { SellerProfileResponseData } from "../../shared/interfaces";

interface SellerProfileFormModuleProps {
  onCancelNavigationLink: string;
  onResetForm: () => void;
  onSuccessCallback?: (response: SellerProfileResponseData) => void;
}
export const SellerProfileFormModule = ({
  onCancelNavigationLink,
  onResetForm,
  onSuccessCallback,
}: SellerProfileFormModuleProps) => {
  const navigate = useNavigate();
  const methods = useForm<SellerProfileFormData>({
    resolver: zodResolver(sellerProfileFormValidationSchema),
    defaultValues: { display_name: "", description: "" },
  });

  const { handleSubmit, reset } = methods;
  const sellerProfileMutation = usePostSellerProfileMutation({
    onSuccessCallback,
  });

  const onSubmit = (data: SellerProfileFormData) => {
    sellerProfileMutation.mutate(data);
  };

  const handleResetForm = () => {
    reset();
    onResetForm();
    navigate(onCancelNavigationLink);
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
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
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
  );
};
