import { Box, Typography } from "@mui/material";
import { basicPageHeaderStyles } from "./styles";

interface BasicPageHeaderProps {
  title: string;
}

export const BasicPageHeader = ({ title }: BasicPageHeaderProps) => {
  return (
    <Box sx={basicPageHeaderStyles}>
      <Typography component="h6" variant="h6">
        {title}
      </Typography>
    </Box>
  );
};
