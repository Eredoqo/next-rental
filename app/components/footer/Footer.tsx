import React from "react";
import {
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  Link,
  Box,
  Stack
} from "@mui/material";
import Image from "next/image";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Divider from "@mui/material/Divider";

import "./footer.css";

import logo from "./../../images/marlon-logo.png";

const quickLinks = [
  {
    path: "/#about",
    display: "About",
  },
  {
    path: "/#cars",
    display: "Car Listing",
  },
  {
    path: "/#blogs",
    display: "Blog",
  },
  {
    path: "/#contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Box id="contact" className="footer">
      <Container>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid item lg={4} md={4} sm={12}>
            <Box className="logo footer__logo">
              <Link href="/" className="d-flex align-items-center gap-2">
                <Image
                  src={logo}
                  style={{
                    width: "100px",
                    height: "80px",
                    borderRadius: "15px",
                  }}
                  alt="Marlon Car Rentals"
                />
              </Link>
            </Box>
            <Typography className="footer__logo-content">
              Marlon Car Rentals, your trusted partner for comfortable and
              affordable car rental services.
            </Typography>
          </Grid>

          <Grid item lg={2} md={4} sm={6}>
            <Box className="mb-4">
              <Typography variant="h5" className="footer__link-title">
                Quick Links
              </Typography>
              <List>
                {quickLinks.map((item, index) => (
                  <ListItem
                    key={index}
                    className="quick__link"
                    sx={{ padding: "8px 0 0 0" }} // Only padding top
                  >
                    <Link href={item.path}>{item.display}</Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>

          <Grid item lg={3} md={4} sm={6}>
            <Box className="mb-4">
              <Typography variant="h5" className="footer__link-title">
                Contact Information
              </Typography>
              <Stack direction="column" spacing={2}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <LocationOnOutlinedIcon style={{ color: "#09A144" }} />
                  <Typography className="office__info">
                    Tirana Airport Albania
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <PhoneEnabledOutlinedIcon style={{ color: "#09A144" }} />
                  <Typography className="office__info">
                    Phone: +355 68 304 8393 / +355 69 602 2177
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <EmailOutlinedIcon style={{ color: "#09A144" }} />
                  <Typography className="office__info">
                    Email: marlonrentalcars@gmail.com
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>

          <Grid item lg={12}>
            <Divider/>
            <Box className="footer__bottom">
              <Typography className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>Copyright {year}, Marlon
                Car Rentals. All rights reserved.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
