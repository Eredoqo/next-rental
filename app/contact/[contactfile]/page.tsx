import React from "react";
import {
  Container,
  Grid,
  Box,
  TextField,
  Typography,
  Button,
  Stack,
} from "@mui/material";

import AddTestimonials from "@/app/components/testimonials/add-testimonials/AddTestimonials";
import GetInTouch from "../GetInTouch";

const Contact = () => {
  return (
    <Box sx={{ margin: "100px 200px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
      <GetInTouch />
      <AddTestimonials />
    </Box>
  );
};

export default Contact;
