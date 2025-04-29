import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Box, Container, Typography } from "@mui/material";
import { useIsAuthenticated } from "../../../shared/permissions/hooks";

export const AccessDenied = () => {
  const isAuthenticated = useIsAuthenticated();
  return (
    <Box component="section" className="section" data-testid="pageAccessDenied">
      <Container>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Box marginBottom={1.5}>
              <Typography component="h1" variant="h4">
                Доступ запрещен (401)
              </Typography>
            </Box>
            <Box marginBottom={1.5}>
              <Typography component="p" variant="h5" marginBottom={1}>
                Что случилось?
              </Typography>
              <Typography component="p" variant="body1">
                Вы попали на страницу, для просмотра которой у Вас нет прав
              </Typography>
            </Box>
            <Box marginBottom={1.5}>
              <Typography component="p" variant="h5" marginBottom={1}>
                Почему это произошло?
              </Typography>
              <Typography component="p" variant="body1">
                В большинстве ситуаций ошибка 401 отображается, если вы открыли
                страницу, к которой у Вас нет прав
              </Typography>
            </Box>
            <Box marginBottom={1.5}>
              <Link to="/">
                <Typography
                  component="p"
                  variant="body1"
                  color="primary"
                  sx={{ textDecoration: "underline" }}
                >
                  Вернуться на главную
                </Typography>
              </Link>
              {!isAuthenticated && (
                <>
                  <Typography component="p" variant="body1" color="primary">
                    или
                  </Typography>
                  <Link to="/login">
                    <Typography
                      component="p"
                      variant="body1"
                      color="primary"
                      sx={{ textDecoration: "underline" }}
                    >
                      Войти в аккаунт
                    </Typography>
                  </Link>
                </>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
