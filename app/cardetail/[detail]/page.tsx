"use client";

import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useGetCars } from "@/app/hooks/useGetCars";
import carData from "@/app/utils/CarData";
import CarItem from "@/app/components/car-gallery/car-item/CarItem";

export default function CarGallery() {
  const { cars, loading, error } = useGetCars();

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }

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
        {cars.map((item) => {
          const carImage = carData.find((car) => item.carSpec[0]?.carTitle === car.carName);
          return (
            <CarItem
              key={item.id}
              item={{
                imgUrl: carImage?.imgUrl,
                model: item?.model,
                carName: item.carSpec[0]?.carTitle,
                automatic: item.carSpec[0]?.transmission,
                seats: item.carSpec[0]?.seats,
                price: item.carSpec[0]?.price,
              }}
            />
          );
        })}
      </Grid>
    </Box>
  );
}
