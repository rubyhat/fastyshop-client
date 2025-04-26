import { Box, Button } from "@mui/material";
import { useProfileStore } from "../../store";

export const ProfileToggleButtons = () => {
  const profileViewMode = useProfileStore((state) => state.profileViewMode);
  const setProfileViewMode = useProfileStore(
    (state) => state.setProfileViewMode,
  );

  return (
    <Box
      sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, width: 1 }}
    >
      <Button
        variant={profileViewMode === "orders" ? "contained" : "outlined"}
        color="primary"
        onClick={() => setProfileViewMode("orders")}
      >
        Мои покупки
      </Button>
      <Button
        variant={profileViewMode === "shops" ? "contained" : "outlined"}
        color="primary"
        onClick={() => setProfileViewMode("shops")}
      >
        Мои магазины
      </Button>
    </Box>
  );
};
