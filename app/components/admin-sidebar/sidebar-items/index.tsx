import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MenuItems from "./menu-item";
import { Drawer, DrawerHeader } from "./../sidebar-items/menu-item/drawer";

export default function Sidebar() {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Rental Car
        </DrawerHeader>
        <Divider />
        <MenuItems />
      </Drawer>
    </Box>
  );
}
