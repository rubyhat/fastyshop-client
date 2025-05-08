import toast from "react-hot-toast";
import { Box, Button, Typography } from "@mui/material";
import { FaRegCircleCheck } from "react-icons/fa6";

import { VerificationFormModule } from "../../../modules/VerificationFormModule";
import { BasicDrawer } from "../BasicDrawer";

interface CreateVerificationDrawerProps {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

const SHOW_FORM = false;

/**
 * Форма для подачи заявки на верификацию, заготовка на будущее, когда будет реализован функционал на бекенде.
 * Сейчас отображаем заглушку с описанием и инструкциями через тех.поддержку. todo: убрать заглушку, реализовать форму.
 * @param {boolean} isOpen Зависимость открытия окна
 * @returns Компонент формы подачи заявки на верификацию юридического профиля.
 */

export const CreateVerificationDrawer = ({
  isOpen,
  setIsOpen,
}: CreateVerificationDrawerProps) => {
  const handleClickReturnButton = () => {
    setIsOpen(false);
  };

  const handleSuccessCallBack = () => {
    setIsOpen(false);
    toast.success("Заявка на верификацию успешно отправлена!!");
  };

  return (
    <BasicDrawer
      title="Заявка на верификацию"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <Box px={2} height={1}>
        <Box
          sx={{ display: "flex", flexDirection: "column", py: 2, height: 1 }}
        >
          <Box flexGrow={1}>
            <Typography component="p" variant="body1" fontWeight={700} pb={1}>
              Верификация юридического профиля
            </Typography>
            <Typography component="p" variant="body2" pb={2}>
              Чтобы обеспечить безопасность продаж, покупок и сотрудничества, мы
              настоятельно рекомендуем пройти верификацию юридических данных
            </Typography>
            <Typography component="p" variant="body2" pb={2}>
              Для этого необходимо отправить документы подтверждающие вашу
              деловую деятельность на почту:
              <br />
              <strong>support@fastyshop.kz</strong>
              <br />
              <br />В теме письма укажите{" "}
              <strong>"Заявка на верификацию"</strong>
            </Typography>
            <Typography component="p" variant="body2" pb={2}>
              После успешного прохождения верификации, вы получите бейдж:
            </Typography>
            <Box
              sx={{
                width: "fit-content",
                display: "flex",
                alignItems: "center",
                gap: 1,
                border: "1px solid",
                borderColor: "green",
                py: 0.5,
                px: 1.5,
                borderRadius: 2,
              }}
            >
              <FaRegCircleCheck color="green" />
              <Typography component="p" variant="body2" color="success">
                Верифицированный магазин
              </Typography>
            </Box>
          </Box>
          <Box>
            <Button
              fullWidth
              size="large"
              variant="contained"
              onClick={() => setIsOpen(false)}
            >
              Закрыть
            </Button>
          </Box>
        </Box>
        {SHOW_FORM && (
          <VerificationFormModule
            submitButtonLabel="Сохранить"
            onClickReturnButton={handleClickReturnButton}
            onSuccessCallback={handleSuccessCallBack}
          />
        )}
      </Box>
    </BasicDrawer>
  );
};
