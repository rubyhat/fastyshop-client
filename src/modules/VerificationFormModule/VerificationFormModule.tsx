import { Box, Button } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { devLogger } from "../../shared/utils";
import { BasicTextField } from "../../shared/components/BasicTextField";
import {
  VerificationFormData,
  verificationFormValidationSchema,
} from "./validations";
import { useSellerStore } from "../SellerModule/store";

interface VerificationFormModuleProps {
  submitButtonLabel?: string;
  onClickReturnButton: () => void;
  onSuccessCallback?: (response: object) => void;
}

export const VerificationFormModule = ({
  submitButtonLabel = "Отправить",
  onSuccessCallback,
  onClickReturnButton,
}: VerificationFormModuleProps) => {
  const editingLegalProfile = useSellerStore(
    (state) => state.editingLegalProfile,
  );

  devLogger.log(editingLegalProfile); // todo: temp, remove after tests

  const methods = useForm<VerificationFormData>({
    resolver: zodResolver(verificationFormValidationSchema),
    defaultValues: {
      description: "",
    },
  });

  const { handleSubmit, reset } = methods;

  // const verificationMutation = usePostLegalProfileMutation({
  //   onSuccessCallback,
  // });

  const onSubmit = (data: VerificationFormData) => {
    devLogger.log(data);
    if (onSuccessCallback) onSuccessCallback({}); // temp
    // verificationMutation.mutate(data);
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
          <Box pb={2}>
            <BasicTextField<VerificationFormData>
              name="description"
              label="Комментарий"
              placeholder="Дополнительный комментарий"
              // disabled={verificationMutation.isPending}
            />
          </Box>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleResetForm}
            // disabled={verificationMutation.isPending}
          >
            Назад
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            // disabled={verificationMutation.isPending}
          >
            {submitButtonLabel}
          </Button>
        </Box>
      </Box>
    </FormProvider>
  );
};
