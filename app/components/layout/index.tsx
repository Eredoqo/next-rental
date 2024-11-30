import { Box, Typography, Avatar, Stack, Button } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import AccountMenu from "../admin-component/account-meu/index";
import { useRouter } from "next/navigation";

export default function Layout() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: "30px 50px 30px 90px",
        }}
      >
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Overview
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
          onClick={() => router.push("/")}
            variant="outlined"
            sx={{
              borderRadius: "10px",
              backgroundColor: "#f9a826",
              width: "100%",
              "&:hover": {
                backgroundColor: "#f9a826", 
              }
            }}
          >
              <Typography color="#000" sx={{ textDecoration: "none" }}>
                Go to User View
              </Typography>
          </Button>
          <NotificationsIcon
            sx={{
              color: "grey",
              bgcolor: "white",
              fontSize: "2.5rem",
              borderRadius: "50%",
              p: 1,
            }}
          />
          <Stack sx={{ cursor: "pointer" }} onClick={() => setMenuOpen(true)}>
            <Avatar
              src="https://randomuser.me/api/portraits/men/1.jpg"
              sx={{ ml: 5, mr: 5 }}
            ></Avatar>
          </Stack>
          <AccountMenu open={isMenuOpen} onClose={() => setMenuOpen(false)} />
        </Box>
      </Box>
    </>
  );
}