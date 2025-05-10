export const badgeStyles = (is_verified: boolean) => {
  return {
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    gap: 1,
    border: "1px solid",
    borderColor: is_verified
      ? "customColors.colorsSuccess"
      : "customColors.labelsSecondary",
    py: 0.5,
    px: 1.5,
    borderRadius: 2,
  };
};
