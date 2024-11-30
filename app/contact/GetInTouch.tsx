import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const GetInTouch = () => {
  return (
    <Stack width="30%">
      <Typography variant="h6" sx={{ mb: "16px"}}>
        Get In Touch
      </Typography>

      <Box component="form">
        <Box mb={3}>
          <TextField
            fullWidth
            placeholder="Your Name"
            type="text"
            variant="outlined"
          />
        </Box>
        <Box mb={3}>
          <TextField
            fullWidth
            placeholder="Email"
            type="email"
            variant="outlined"
          />
        </Box>
        <Box mb={3}>
          <TextField
            fullWidth
            placeholder="Message"
            multiline
            rows={5}
            variant="outlined"
          />
        </Box>
        <Button
          variant="contained"
          sx={{
            borderRadius: "20px",
            backgroundColor: "#0317ac",
            padding: "8px 0px",
            width: "50%",
            "&:hover": {
              backgroundColor: "#0317ac",
            },
          }}
        >
          Send Message
        </Button>
      </Box>
    </Stack>
  );
};

export default GetInTouch;
