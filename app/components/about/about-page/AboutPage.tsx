"use client";

import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import aboutImg from "./../../../images/cars-img/bmw-offer.png";
import "./../about-section.css";

const AboutPageDetail = () => {
  return (
    <Grid container spacing={4} pb={6}>
      <Grid item lg={6} md={6}>
        <div className="about__section-content">
          <Typography variant="h5" className="about__subtitle">
            About Us
          </Typography>
          <Typography variant="h3" className="section__title">
            Welcome to Our Car Rental Service
          </Typography>
          <Typography variant="body1" className="section__description">
            We are a leading car rental service providing top-notch vehicles for
            all your travel needs. Our fleet includes a wide range of cars from
            economy to luxury, ensuring we have the perfect vehicle for your
            specific requirements and budget.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mt: 3,
              spacing: "32px",
            }}
          >
            <Stack justifyContent="center" spacing={3}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <CheckCircleOutlineIcon className="about__section-item-icon" />{" "}
                <Typography
                  variant="body2"
                  className="section__description d-flex align-items-center gap-2"
                >
                  Wide range of vehicles to choose from.
                </Typography>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <CheckCircleOutlineIcon className="about__section-item-icon" />
                <Typography
                  variant="body2"
                  className="section__description d-flex align-items-center gap-2"
                >
                  Competitive pricing and flexible rental terms.
                </Typography>
              </div>
            </Stack>

            <Stack justifyContent="center" spacing={3}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <CheckCircleOutlineIcon className="about__section-item-icon" />

                <Typography
                  variant="body2"
                  className="section__description d-flex align-items-center gap-2"
                >
                  Excellent customer service and support.
                </Typography>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <CheckCircleOutlineIcon className="about__section-item-icon" />

                <Typography
                  variant="body2"
                  className="section__description d-flex align-items-center gap-2"
                >
                  Convenient locations and easy booking process.
                </Typography>
              </div>
            </Stack>
          </Box>
        </div>
      </Grid>

      <Grid
        item
        lg={6}
        md={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <div className="about__img">
          <Image
            style={{ width: "100%", height: "100%" }}
            src={aboutImg}
            alt=""
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default AboutPageDetail;
