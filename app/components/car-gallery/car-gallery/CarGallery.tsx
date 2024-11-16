"use client"

import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import CarItem from "../car-item/CarItem";
import { useGetCars } from "@/app/hooks/useGetCars";

export default function CarGallery() {
  const { cars, loading, error } = useGetCars();

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }

  console.log(cars, "cars");

  return (
    <Box id="cars" sx={{ background: "#F0F3F4", p: "40px 80px" }}>
      <Stack alignItems="center" pb={8}>
        <Typography sx={{ color: "#000", fontWeight: 600, fontSize: "1.7rem" }}>
          Come With
        </Typography>
        <Typography
          sx={{ color: "#098825", fontWeight: 600, fontSize: "2.5rem" }}
        >
          Hot Offers
        </Typography>
      </Stack>
      <Grid container spacing={3}>
        {cars.slice(0, 6).map((item) => (
          <CarItem item={item} key={item.id} />
        ))}
      </Grid>
    </Box>
  );
}