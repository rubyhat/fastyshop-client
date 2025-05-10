import { Box, Typography } from "@mui/material";
import { FaRegCircleCheck } from "react-icons/fa6";
import { badgeStyles } from "./styles";

interface VerificationBadgeProps {
  is_verified: boolean;
}

export const VerificationBadge = ({ is_verified }: VerificationBadgeProps) => {
  return (
    <Box sx={badgeStyles(is_verified)}>
      <FaRegCircleCheck
        color={is_verified ? "#008000" : "hsla(240, 6%, 25%, 0.6)"}
      />
      <Typography
        component="p"
        variant="body2"
        color={
          is_verified
            ? "customColors.colorsSuccess"
            : "customColors.labelsSecondary"
        }
      >
        Верифицированный магазин
      </Typography>
    </Box>
  );
};
