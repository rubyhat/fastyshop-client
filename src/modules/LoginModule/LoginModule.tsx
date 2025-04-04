import { Container, Grid } from "@mui/material";
import { LoginForm } from "./components/LoginForm";

/**
 * Модуль страницы входа в систему.
 *
 * - Центрирует форму входа (`LoginForm`) по горизонтали и вертикали.
 * - Использует `Grid2` для адаптивного расположения формы.
 *
 * @returns React-компонент модуля входа
 */
export const LoginModule = () => {
  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center">
        <Grid size={{ xs: 12, md: 6 }} py={10}>
          <LoginForm />
        </Grid>
      </Grid>
    </Container>
  );
};
