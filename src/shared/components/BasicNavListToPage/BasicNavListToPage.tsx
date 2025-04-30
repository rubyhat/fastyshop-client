import { Box, Paper } from "@mui/material";
import { FaAngleRight } from "react-icons/fa";
import { basicNavListToPageListItemStyles } from "./styles";
import { useNavigate } from "react-router-dom";

export interface BasicNavListToPageItem {
  label: string;
  link: string;
}

interface BasicNavListToPageProps {
  list: BasicNavListToPageItem[];
}

export const BasicNavListToPage = ({ list }: BasicNavListToPageProps) => {
  const navigate = useNavigate();
  return (
    <Box component={Paper} sx={{ py: 0.5 }}>
      <Box component="ul">
        {list.map(({ label, link }, i) => (
          <Box
            key={i}
            component="li"
            onClick={() => navigate(link)}
            sx={basicNavListToPageListItemStyles(i === list.length - 1)}
          >
            {label}
            <Box
              sx={{ ml: "auto", mr: 1, display: "flex", alignItems: "center" }}
            >
              <FaAngleRight size={16} color="#1c1c1c" />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
