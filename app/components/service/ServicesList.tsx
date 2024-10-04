import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import servicesData from "./../../utils/ServiceData";

const ServiceItem = ({ item }: { item: any }) => (
  <Grid item lg={4} md={4} sm={6} className="mb-3">
    <Grid container direction="column" alignItems="start" spacing={2}>
      <Grid item>
        {React.cloneElement(item.icon, {
          style: { fontSize: "2.5rem", color: "#f9a826" },
        })}
      </Grid>
      <Grid item>
        <Typography
          sx={{ fontSize: "1.2rem", fontWeight: 600, transition: "0.3s" }}
        >
          {item.title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          sx={{ color: "#000", fontSize: "0.9rem", lineHeight: "30px" }}
        >
          {item.desc}
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);

const ServicesList = () => {
  return (
    <Box pt={5} pb={5} pl={10} pr={10}>
      <Stack alignItems="center" pb={8}>
        <Typography sx={{ color: "#000", fontWeight: 600, fontSize: "2.5rem" }}>
          See our
        </Typography>
        <Typography
          sx={{ color: "#098825", fontWeight: 600, fontSize: "1.7rem" }}
        >
          Popular Services
        </Typography>
      </Stack>
      <Grid container spacing={3}>
        {servicesData.map((item: any) => (
          <ServiceItem item={item} key={item.id} />
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesList;
