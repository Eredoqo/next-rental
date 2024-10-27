import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Card, useMediaQuery } from "@mui/material";
import FilterWeek from "./filter-week";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1440,
      xl: 1920,
    },
  },
});

export default function CarListingCard() {
  const isScreenLarge = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          borderRadius: "20px",
          width: isScreenLarge ? "960px" : "770px",
          flexShrink: 0,
        }}
      >
        <FilterWeek />
      </Card>
    </ThemeProvider>
  );
}
