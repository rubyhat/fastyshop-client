export const bottomNavigationMenuStyles = {
  width: 1,
  p: 2,
  borderTop: "1px solid",
  borderColor: "customColors.colorsGreyLight",
  position: "fixed",
  bottom: 0,
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  backgroundColor: "#fff",
};

export const menuItemStyles = { textAlign: "center", cursor: "pointer" };

export const menuItemIconStyles = (isActive: boolean) => {
  return {
    transition: "color 333ms ease",
    color: isActive ? "#000000" : "#cccccc",
  };
};

export const menuItemTextStyles = (isActive: boolean) => {
  return {
    transition: "color 333ms ease",
    color: isActive ? "#000000" : "#cccccc",
  };
};
