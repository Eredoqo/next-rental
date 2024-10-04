"use client";

import React from "react";
import {
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  Link,
  Box,
} from "@mui/material";

import "./footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Box id="contact" component="footer" className="footer">
      <Container>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid item lg={4} md={4} sm={12}>
            <Typography variant="h4">
              {/* to put logo here  */}
              <Link sx={{ textDecoration: "none", color: "#000" }} href="/home">
                <Box component="i" className="ri-car-line" />
                Rent Car <br /> Service
              </Link>
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, distinctio.
            </Typography>
          </Grid>

          <Grid item lg={2} md={4} sm={6}>
            <Typography variant="h5">Quick Links</Typography>
            <List>
              {quickLinks.map((item, index) => (
                <ListItem key={index}>
                  <Link
                    sx={{ textDecoration: "none", color: "#000" }}
                    href={item.path}
                  >
                    {item.display}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item lg={3} md={4} sm={6}>
            <Typography variant="h5">Contact Information</Typography>
            <Typography>Tirana Airport Albania</Typography>
            <Typography>Phone: +355 68 304 8393 / +355 69 602 2177</Typography>
            <Typography>Email: marlonrentacars@gmail.com</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
