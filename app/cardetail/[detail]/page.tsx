"use client";

import React, { useEffect, useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import CarItem from "../../components/car-gallery/car-item/CarItem";

interface Car {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export default function CarDetailPage() {
  const [carData, setCarData] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("/api/cars");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCarData(data);
      } catch (error) {
        console.error("Failed to fetch car data:", error);
      }
    };

    fetchCars();
  }, []);

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
        {carData.slice(0, 6).map((item) => (
          <CarItem item={item} key={item.id} />
        ))}
      </Grid>
    </Box>
  );
}
