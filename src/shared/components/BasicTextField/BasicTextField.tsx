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
}: BasicTextFieldProps<T>) => {
  const {
    formState: { errors },
  } = useFormContext<T>();

  return (
    <Controller
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          sx={{ width: 1 }}
          placeholder={placeholder}
          error={!!(errors as FieldErrors<T>)[name]}
          helperText={(errors as FieldErrors<T>)[name]?.message as string}
          disabled={disabled}
        />
      )}
    />
  );
};
