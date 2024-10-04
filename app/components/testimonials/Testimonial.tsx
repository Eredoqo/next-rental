"use client";

import React from "react";
import Carousel from "react-material-ui-carousel";
import TestimonialItem from "./testimonial-item/TestimonialItem";

import "./testimonials.css";
import ava01 from "./../../images/ava-1.jpg";
import ava02 from "./../../images/ava-2.jpg";
import ava03 from "./../../images/ava-3.jpg";
import ava04 from "./../../images/ava-4.jpg";
import testimonialsData from "@/app/utils/TestimonialsData";
import { Box, Grid, Stack, Typography } from "@mui/material";

const photos = [ava01, ava02, ava03, ava04];

const Testimonial = () => {
  // Group testimonials data into chunks of three
  const chunks = [];
  for (let i = 0; i < testimonialsData.length; i += 3) {
    chunks.push(testimonialsData.slice(i, i + 3));
  }

  return (
    <Box pt={5} pb={5} pl={20} pr={20}>
      <Stack alignItems="center" pb={8}>
        <Typography sx={{ color: "#000", fontWeight: 600, fontSize: "1.7rem" }}>
          Our clients says
        </Typography>
        <Typography
          sx={{ color: "#098825", fontWeight: 600, fontSize: "2.5rem" }}
        >
          Testimonials
        </Typography>
      </Stack>
      <Carousel autoPlay={true} animation="slide">
        {chunks.map((chunk, index) => (
          <Grid container spacing={3} key={index}>
            {chunk.map((testimonialData, i) => (
              <Grid item xs={12} sm={4} key={i}>
                <TestimonialItem
                  testimonialData={testimonialData}
                  photo={photos[(index * 3 + i) % photos.length]}
                />
              </Grid>
            ))}
          </Grid>
        ))}
      </Carousel>
    </Box>
  );
};

export default Testimonial;
