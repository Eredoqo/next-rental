import { Button } from "@mui/material";

export const StatusButton = ({ status }: { status: string }) => {
    let backgroundColor;
    switch (status) {
      case "Available":
        backgroundColor = "#ADFF2F";
        break;
      case "Booked":
        backgroundColor = "#E0B0FF";
        break;
      case "Canceled":
        backgroundColor = "#FFA07A";
        break;
      default:
        backgroundColor = "#808080";
    }
  
    return (
      <Button
        variant="outlined"
        sx={{
          border: "1px solid currentColor",
          background: backgroundColor,
          color: "white",
        }}
      >
        {status}
      </Button>
    );
  };