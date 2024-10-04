"use client";

import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";

const TestimonialItem = ({ testimonialData, photo }: any) => {
  return (
    <Card sx={{ borderRadius: "15px" }} variant="outlined">
      <CardContent sx={{ height: "250px", width: "100%", overflow: "auto" }}>
        <Typography
          variant="body1"
          align="center"
          sx={{
            height: "70px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {testimonialData.testimonial}
        </Typography>
        <Box sx={{ mt: 3, display: "flex", alignItems: "center", gap: 4 }}>
          <Image
            src={photo}
            alt=""
            className="rounded-2"
            style={{ width: "130px", height: "100px", borderRadius: "20%" }}
          />
          <Box>
            <Typography variant="h4" className="mb-0 mt-3 title">
              {testimonialData.name}
            </Typography>
            <Typography variant="h5" className="desc">
              Customer
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TestimonialItem;
