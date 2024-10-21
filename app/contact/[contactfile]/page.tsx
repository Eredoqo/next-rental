import React from "react";
import {
  Container,
  Grid,
  Box,
  TextField,
  Typography,
  Button,
  Link,
  Stack,
} from "@mui/material";
import socialLinks from "../../utils/SocialLinks";

import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";

const Contact = () => {
  return (
    <Box sx={{ margin: "100px 0px " }}>
      <Container>
        <Grid
          container
          spacing={30}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Grid item lg={7} md={7}>
            <Typography variant="h6" className="fw-bold mb-4">
              Get In Touch
            </Typography>

            <Box component="form">
              <Box mb={3}>
                <TextField
                  fullWidth
                  placeholder="Your Name"
                  type="text"
                  variant="outlined"
                />
              </Box>
              <Box mb={3}>
                <TextField
                  fullWidth
                  placeholder="Email"
                  type="email"
                  variant="outlined"
                />
              </Box>
              <Box mb={3}>
                <TextField
                  fullWidth
                  placeholder="Message"
                  multiline
                  rows={5}
                  variant="outlined"
                />
              </Box>

              <Button
                className="contact__btn"
                type="submit"
                variant="contained"
                color="primary"
              >
                Send Message
              </Button>
            </Box>
          </Grid>

          <Grid item lg={4} spacing={40}>
            <Box className="office__info_contact">
              <Typography variant="h5" sx={{ mb: 3 }}>
                Contact Information
              </Typography>
              <Typography className="office__info_contact" sx={{ mb: 2 }}>
                <LocationOnOutlinedIcon style={{ color: "#09A144" }} /> Tirana
                Airport Albania
              </Typography>
              <Typography className="office__info_contact" sx={{ mb: 2 }}>
                <PhoneEnabledOutlinedIcon style={{ color: "#09A144" }} /> Phone:
                +355 68 304 8393 / +355 69 602 2177
              </Typography>
              <Typography className="office__info_contact" sx={{ mb: 2 }}>
                <EmailOutlinedIcon style={{ color: "#09A144" }} /> Email:
                marlonrentalcars@gmail.com
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
