import { Box } from "@mui/material";
import { LayoutWrapper } from "../../admin-sidebar";
import CarTable from "@/app/adminpage/[cardetailsadmin]/page";


export default function CarDetails() {
  return (
    <LayoutWrapper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Car Details</h1>
        <CarTable />
      </Box>
    </LayoutWrapper>
  );
}