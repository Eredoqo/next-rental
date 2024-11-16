import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import { useGetUser } from "@/hooks/useGetUser";
import { Typography } from "@mui/material";

interface AccountMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function AccountMenu({ open, onClose }: AccountMenuProps) {
  const { user } = useGetUser();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClose = () => {
    setAnchorEl(null);
    if (onClose) {
      onClose();
    }
  };
  return (
    <React.Fragment>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "left", vertical: "top" }}
        style={{ top: "50px", left: "1186px" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar>
            <Typography>
              {user?.firstName[0]}
              {user?.lastName[0]}
            </Typography>
          </Avatar>
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" /> My
          account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
