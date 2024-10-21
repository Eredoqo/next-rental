"use client";

import React from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SettingsIcon from "@mui/icons-material/Settings";
import SpeedIcon from "@mui/icons-material/Speed";
import Image from "next/image";
import Link from "next/link";

export default function CarItem(props: any) {
  const { imgUrl, model, carName, automatic, speed, price } = props.item;

  return (
    <Grid item lg={4} md={4} sm={6} sx={{ mb: 5 }}>
      <Card
        sx={{
          border: "1px solid #7c8a9736",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <CardContent>
          <Box sx={{ width: "100%" }}>
            <Image src={imgUrl} alt="" style={{ width: "100%" }} />
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h4" align="center" sx={{ fontSize: "1.8rem" }}>
              {carName}
            </Typography>
            <Typography
              variant="h6"
              align="center"
              sx={{ mt: 2, fontSize: "1.2rem", fontWeight: 600 }}
            >
              ${price}.00 <span>/ Day</span>
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mt: 3,
                mb: 4,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <DirectionsCarIcon
                  sx={{ color: "#f9a826", fontSize: "1.5rem" }}
                />{" "}
                {model}
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <SettingsIcon sx={{ color: "#f9a826", fontSize: "1.5rem" }} />{" "}
                {automatic}
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <SpeedIcon sx={{ color: "#f9a826", fontSize: "1.5rem" }} />{" "}
                {speed}
              </Box>
            </Box>
            <Box
              sx={{ gap: "15px", display: "flex", justifyContent: "center" }}
            >
              <Button
                variant="contained"
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "#0317ac",
                  padding: "8px 0px",
                  width: "35%",
                }}
              >
                <Link
                  href={`/rentmodal/${carName}`}
                  passHref
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    fontWeight: 400,
                    fontSize: "14px",
                  }}
                >
                  Rent
                </Link>
              </Button>

              <Button
                variant="contained"
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "#01530d",
                  padding: "8px 0px",
                  width: "35%",
                }}
              >
                <Link
                  href={`/cars/${carName}`}
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    fontWeight: 400,
                    fontSize: "14px",
                  }}
                >
                  Details
                </Link>
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}
