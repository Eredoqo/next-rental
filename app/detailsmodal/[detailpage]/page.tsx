"use client";

import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Rating,
  Stack,
} from "@mui/material";
import Image from "next/image";

import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SpeedIcon from "@mui/icons-material/Speed";
import AccessibleOutlinedIcon from "@mui/icons-material/AccessibleOutlined";
import AddLocationOutlinedIcon from "@mui/icons-material/AddLocationOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import carData from "@/app/utils/CarData";
import AddTestimonials from "@/app/components/testimonials/add-testimonials/AddTestimonials";


const CarDetails = () => {
  const dataRentDetails = carData.find((item) => item.id === item.id);

  return (
    <Box component="section">
      <Container>
        <Grid container spacing={4} mt="40px">
          <Grid item lg={6}>
            <Image
              src={dataRentDetails.imgUrl}
              alt={dataRentDetails.carName}
              className="w-100"
              width={500}
              height={300}
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>

          <Grid item lg={6}>
            <Box className="car__info">
              <Typography variant="h2" className="section__title">
                {dataRentDetails.carName}
              </Typography>

              <Box
                className="d-flex align-items-center gap-5 mb-4 mt-3"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  mb: 4,
                  mt: 3,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600 }}
                  className="rent__price fw-bold fs-4"
                >
                  €{dataRentDetails.price}.00 / Day
                </Typography>

                <Box
                  className="d-flex flex-row align-items-center gap-20"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Typography>({dataRentDetails.rating} ratings)</Typography>
                  <Rating
                    name="read-only"
                    value={dataRentDetails.rating}
                    readOnly
                    precision={0.5}
                  />
                </Box>
              </Box>

              <Typography
                sx={{ fontSize: "14px" }}
                className="section__description"
              >
                {dataRentDetails.description}
              </Typography>

              <Grid container spacing={2} sx={{ mt: 3 }}>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack
                    className="section__description"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <DirectionsCarFilledOutlinedIcon
                      style={{ color: "#f9a826", fontSize: "20px" }}
                    />
                    <Typography>Model-{dataRentDetails.model}</Typography>
                  </Stack>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    className="section__description"
                  >
                    <SettingsOutlinedIcon
                      style={{ color: "#f9a826", fontSize: "20px" }}
                    />
                    <Typography> {dataRentDetails.automatic}</Typography>
                  </Stack>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    className="section__description"
                  >
                    <SpeedIcon style={{ color: "#f9a826", fontSize: "20px" }} />
                    <Typography>{dataRentDetails.speed}</Typography>
                  </Stack>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    className="section__description"
                  >
                    <AccessibleOutlinedIcon
                      style={{ color: "#f9a826", fontSize: "20px" }}
                    />
                    <Typography>{dataRentDetails.gps}</Typography>
                  </Stack>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    className="section__description"
                  >
                    <AddLocationOutlinedIcon
                      style={{ color: "#f9a826", fontSize: "20px" }}
                    />
                    <Typography>{dataRentDetails.seatType}</Typography>
                  </Stack>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    className="section__description"
                  >
                    <BusinessOutlinedIcon
                      style={{ color: "#f9a826", fontSize: "20px" }}
                    />
                    <Typography> {dataRentDetails.brand}</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item lg={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <AddTestimonials />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CarDetails;
