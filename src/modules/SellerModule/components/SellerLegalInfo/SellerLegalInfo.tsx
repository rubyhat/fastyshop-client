import toast from "react-hot-toast";
import { FaRegCircleCheck } from "react-icons/fa6";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";

import { useSellerStore } from "../../store";
import { useGetAllLegalProfilesOfUserQuery } from "../../hooks";
import { cardHeaderStyles, cardStyles, cardWrapperStyles } from "./styles";
import { AxiosErrorAlertMessage } from "../../../../shared/components/AxiosErrorAlertMessage";
import { LegalForm, LegalFormDisplayText } from "../../../../shared/interfaces";

export const SellerLegalInfo = () => {
  const setShowCreateLegalProfileDrawer = useSellerStore(
    (state) => state.setShowCreateLegalProfileDrawer,
  );

  const {
    data: dataLegalProfile,
    isSuccess: isSuccessLegalProfile,
    isLoading: isLoadingLegalProfile,
    isError: isErrorLegalProfile,
    error: errorLegalProfile,
  } = useGetAllLegalProfilesOfUserQuery();

  const handleClickVerificationIcon = (
    event: React.MouseEvent<HTMLButtonElement>,
    isVerified: boolean,
  ) => {
    event.preventDefault();
    if (isVerified) {
      toast.success("Верификация была успешно пройдена!");
    } else {
      toast.error(
        "Верификация не пройдена, обратитесь в службу поддержки support@fastyshop.kz",
        { duration: 5000 },
      );
    }
  };

  if (isLoadingLegalProfile) {
    return (
      <Skeleton variant="rounded" width="100%" height={166} sx={{ mt: 1 }} />
    );
  }

  if (isSuccessLegalProfile && dataLegalProfile) {
    return (
      <Box sx={cardWrapperStyles} pt={1}>
        {dataLegalProfile.map((profile) => {
          const isVerified = profile.is_verified;
          return (
            <Box key={profile.id} sx={cardStyles} component={Paper}>
              <Box sx={cardHeaderStyles}>
                <Box>
                  <Typography component="p" variant="body1" fontWeight={700}>
                    {profile.company_name}
                  </Typography>
                  <Typography
                    component="p"
                    variant="caption"
                    color="customColors.labelsSecondary"
                  >
                    {LegalFormDisplayText[profile.legal_form]}
                  </Typography>
                </Box>
                <IconButton
                  size="small"
                  color={isVerified ? "success" : "default"}
                  onClick={(e) => handleClickVerificationIcon(e, isVerified)}
                >
                  <FaRegCircleCheck size={14} />
                </IconButton>
              </Box>

              <Typography component="p" variant="body2">
                <strong>
                  {[LegalForm.IP, LegalForm.SELF].includes(profile.legal_form)
                    ? "ИИН:"
                    : "БИН"}{" "}
                </strong>
                {profile.tax_id}
              </Typography>
              <Typography component="p" variant="body2">
                <strong>Адрес:</strong> {profile.legal_address}
              </Typography>
              <Typography
                component="p"
                variant="caption"
                color="customColors.labelsSecondary"
                mt={1}
              >
                Верификация не пройдена
              </Typography>
            </Box>
          );
        })}
        <Button
          variant="outlined"
          color="success"
          onClick={() => setShowCreateLegalProfileDrawer(true)}
        >
          + Создать новый
        </Button>
      </Box>
    );
  }

  if (isErrorLegalProfile && errorLegalProfile) {
    return (
      <Box py={1}>
        <AxiosErrorAlertMessage error={errorLegalProfile} />
      </Box>
    );
  }

  return null;
};
