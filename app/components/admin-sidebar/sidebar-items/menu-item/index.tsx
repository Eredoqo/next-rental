import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FC, useEffect, useState } from "react";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import GridViewIcon from "@mui/icons-material/GridView";
import InventoryIcon from "@mui/icons-material/Inventory";
import CarRentalIcon from "@mui/icons-material/CarRental";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SettingsIcon from "@mui/icons-material/Settings";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { Link, useNavigate } from "react-router-dom";
import { List, Typography, Divider } from "@mui/material";

interface User {
  token: string;
  data?: string;
}

export default function MenuItems() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const currentUser = localStorage.getItem("token")
      ? ({ token: localStorage.getItem("token"), data: "" } as User)
      : null;
    setUser(currentUser);
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  const menuItems1 = [
    { text: "Dashboard", icon: <GridViewIcon />, path: "/admin" },
    { text: "Cars", icon: <AccessibilityIcon />, path: "/cardetailsadmin" },
    { text: "Inventory", icon: <InventoryIcon />, path: "/inventory" },
    { text: "Add New Car", icon: <DirectionsCarIcon />, path: "/addcarsadmin" },
    { text: "Bookings", icon: <BookmarksIcon />, path: "/bookings" },
    { text: "Calendar", icon: <CalendarMonthIcon />, path: "/calendar" },
  ];

  const menuItems2 = [
    {
      text: "Users",
      icon: <PeopleOutlineIcon />,
      path: "/users",
    },
    {
      text: "Transactions",
      icon: <AccountBalanceIcon />,
      path: "/transactions",
    },
    { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
    { text: "Car Reports", icon: <CarRentalIcon />, path: "/car-reports" },
  ];

  const logoutItem = {
    text: "Logout",
    icon: <LogoutIcon color="warning" />,
    onClick: handleLogout,
  };

  interface MenuItemProps {
    text: string;
    icon: JSX.Element;
    onClick?: () => void;
    path?: string;
  }

  const MenuItem: FC<MenuItemProps> = ({ text, icon, onClick, path }) => (
    <ListItem disablePadding>
      <ListItemButton
        component={path ? Link : "div"}
        to={path}
        onClick={onClick}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );

  return (
    <>
      <List sx={{ marginLeft: "20px" }}>
        <Typography sx={{ padding: "20px" }}>Admin Overview</Typography>
        {menuItems1.map((item) => (
          <MenuItem key={item.text} {...item} />
        ))}
      </List>
      <Divider />
      <List sx={{ marginLeft: "20px" }}>
        <Typography sx={{ padding: "20px" }}>Reports</Typography>
        {menuItems2.map((item) => (
          <MenuItem key={item.text} {...item} />
        ))}
        <MenuItem key={logoutItem.text} {...logoutItem} />
      </List>
    </>
  );
}
