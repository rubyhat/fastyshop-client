import { Controller, useFormContext, FieldErrors } from "react-hook-form";
import { TextField } from "@mui/material";

/**
 * Универсальные пропсы для `BasicTextField`, принимающие любой тип формы.
 */
interface BasicTextFieldProps<T extends Record<string, unknown>> {
  /** Имя поля формы (ключ объекта T) */
  name: keyof T & string; // Теперь name гарантированно строка

  /** Заголовок поля (отображается над инпутом) */
  label: string;

  /** Подсказка (placeholder) внутри поля ввода */
  placeholder: string;

  /** Тип HTML-инпута (например, "text", "password", "email") */
  type?: React.HTMLInputTypeAttribute;

  /** Состояние поля */
  disabled?: boolean;

  /** Размер инпута TextField */
  size?: "small" | "medium";

  /** Подсказка под инпутом */
  helperText?: React.ReactNode;

  inputName?: string;
  autoComplete?: string;

  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

/**
 * Универсальный компонент текстового поля для формы.
 *
 * Интегрируется с `react-hook-form` и использует `TextField` из MUI.
 *
 * @param {BasicTextFieldProps<T>} props Пропсы компонента
 * @returns React-компонент текстового поля
 */
export const BasicTextField = <T extends Record<string, unknown>>({
  name,
  label,
  placeholder,
  type,
  disabled,
  size,
  helperText,
  inputName,
  autoComplete,
  onClick,
}: BasicTextFieldProps<T>) => {
  const {
    formState: { errors },
  } = useFormContext<T>();

  const fieldError = (errors as FieldErrors<T>)[name];

  return (
    <Controller
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          name={inputName ?? name}
          autoComplete={autoComplete}
          label={label}
          type={type}
          sx={{ width: 1 }}
          slotProps={{
            // input: { sx: { fontSize: size === "small" ? 14 : 16 } },
            // htmlInput: { sx: { p: 1.25 } },
            input: {
              // Фиксим цветной бекграунд на странице логина в инпутах, когда браузер сам заполняет данные
              sx: {
                backgroundColor: "#fff",
                "& input:-webkit-autofill": {
                  boxShadow: "0 0 0 1000px white inset",
                  WebkitBoxShadow: "0 0 0 1000px white inset",
                  WebkitTextFillColor: "#000",
                  transition: "background-color 5000s ease-in-out 0s",
                },
              },
            },
          }}
          placeholder={placeholder}
          error={!!fieldError?.message}
          helperText={(fieldError?.message as string) || helperText}
          disabled={disabled}
          size={size}
          onClick={onClick}
        />
      )}
    />
  );
};
