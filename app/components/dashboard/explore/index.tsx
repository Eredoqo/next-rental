import {
  Box,
  Button,
  Card,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
// import ExploreImg from "./../../../../../images/explore.png";
// import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
export default function ExploreCard() {
  // const navigate = useNavigate();
  const isScreenLarge = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{ borderRadius: "20px", width: isScreenLarge ? "960px" : "770px" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "30px",
          }}
        >
          <Stack
            alignItems="flex-start"
            justifyContent="center"
            height="100%"
            width="400px"
            spacing={3}
          >
            <Typography width="80%" variant="h5">
              Manage Your Fleet Efficiently
            </Typography>
            <Typography width="95%">
              Gain a comprehensive overview of your vehicle inventory. Easily
              add, update, or remove vehicles to ensure your fleet meets
              customer demands. Use our intuitive admin dashboard to streamline
              your operations and enhance your service.
            </Typography>
            <Button
              // onClick={() => navigate("/inventory")}
              variant="contained"
              sx={{ color: "white" }}
            >
              Go to Inventory
            </Button>
          </Stack>
          <Stack width="40%">
            {/* <img
              style={{
                width: " 250px",
                height: "250px",
              }}
              src={ExploreImg}
            /> */}
          </Stack>
        </Box>
      </Card>
    </ThemeProvider>
  );
}
