import { Card, Box, Typography, Stack, Divider } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
// import Turnover from "./../../../../../images/turnover.png";
// import Income from "./../../../../../images/Income.png";
// import Outcome from "./../../../../../images/Outcome.png";

const StatisticsCard = ({
  title,
  value,
  change,
  image,
  color,
}: {
  title: string;
  value: string;
  change: string;
  image: string;
  color: string;
}) => {
  return (
    <Card
      sx={{
        width: "280px",
        borderRadius: "20px",
        display: "inline-block",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 20px 10px 20px",
        }}
      >
        <Stack gap={2} flexDirection="row" alignItems="center">
          <CachedIcon sx={{ color: color }} />
          <Typography sx={{ padding: "5px" }} variant="h6">
            {title}
          </Typography>
        </Stack>
        <Stack
          sx={{ cursor: "pointer", color: "grey" }}
          onClick={() => console.log("clicked")}
        >
          <ArrowForwardIcon />
        </Stack>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <Stack>
          <Typography fontSize="14px">{value}</Typography>
          <Stack flexDirection="row">
            <Typography sx={{ color: color }}>{change} </Typography>
            <Typography
              sx={{ color: "grey", display: "flex", alignItems: "center" }}
              fontSize="10px"
            >
              from last month
            </Typography>
          </Stack>
        </Stack>
        <Image style={{ height: "50px", width: "100px" }} width={100} height={50} src={image} alt="" />
      </Box>
    </Card>
  );
};

export default function StatisticsCards() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      <StatisticsCard
        title="Turnover"
        value="$50,000"
        change="+72"
        image={""}
        color="purple"
      />
      <StatisticsCard
        title="Income"
        value="$40,000"
        change="+60"
        image={""}
        color="green"
      />
      <StatisticsCard
        title="Outcome"
        value="$10,000"
        change="-12"
        image={""}
        color="red"
      />
    </Box>
  );
}
