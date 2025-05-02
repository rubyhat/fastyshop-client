import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAxiosMutation } from "../../../configs/useAxiosMutation";
import { apiRegistrationModule } from "../api";
import { RegistrationFormData } from "../validations";
import { useRegistrationStore } from "../store/useRegistrationStore";

export const usePostNewUserMutation = () => {
  const navigate = useNavigate();
  const setShowRegistrationDrawer = useRegistrationStore(
    (state) => state.setShowRegistrationDrawer,
  );

  return useAxiosMutation({
    mutationFn: (data: RegistrationFormData) =>
      apiRegistrationModule.postNewUser(data),
    onSuccess: (response) => {
      toast.success("Регистрация прошла успешно, добро пожаловать!");
      setShowRegistrationDrawer(false);
      navigate("/profile");
      return response;
    },
    onError: (error) => {
      toast.error("Произошла ошибка! " + error?.message);
    },
  });
};
