import { Box, Typography, Stack, Button } from "@mui/material";

export default function LoginSignUpButton() {
  return (
    <Box
      sx={{
        mt: "40px",
        display: "flex",
        flexDirection: "row",
        gap: 7,
      }}
    >
      <Typography sx={{ display: "flex", alignItems: "center", ml: "20px" }}>
        Dont have an account?
      </Typography>
      <Stack alignItems="center">
        <Button
          sx={{
            color: "#1458D3",
            height: "35px",
            borderRadius: "10px",
          }}
          variant="contained"
          color="primary"
          onClick={() => console.log("Sign up")}
        >
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            color="white"
            variant="button"
          >
            Sign up
          </Typography>
        </Button>
      </Stack>
    </Box>
  );
}
