import { Box, Stack } from "@mui/material";
import Sidebar from "./sidebar-items";
import Layout from "../layout";
import ProfileCard from "../dashboard/profile/index";
import ExploreCard from "../dashboard/explore";
import CarListingCard from "../dashboard/car-listing";
import StatisticsCard from "../dashboard/statistics";

interface CardStackProps {
  children: React.ReactNode;
}

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export const LayoutWrapper = ({ children }: LayoutWrapperProps) => (
  <Box sx={{ display: "flex", flexDirection: "row" }}>
    <Sidebar />
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        bgcolor: "grey.100",
      }}
    >
      <Layout />
      {children}
    </Box>
  </Box>
);

const CardStack = ({ children }: CardStackProps) => (
  <Box padding="0 90px 0 70px ">
    <Stack
      sx={{
        gap: 3,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingBottom: "40px",
        alignItems: "center",
      }}
    >
      {children}
    </Stack>
  </Box>
);

export function Dashboard() {
  return (
    <LayoutWrapper>
      <CardStack>
        <ExploreCard />
        <ProfileCard />
      </CardStack>
      <CardStack>
        <CarListingCard />
        <StatisticsCard />
      </CardStack>
    </LayoutWrapper>
  );
}
