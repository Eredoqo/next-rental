"use client";
import React, { useEffect, useState } from "react";

import { Grid, Typography, Box, TextField, Button } from "@mui/material";

const AddTestimonials = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [testimonial, setTestimonial] = useState();

  return (
    <Grid item lg={5} className="mt-5">
      <Box className="testimonial-form">
        <Typography variant="h5">Submit your testimonial</Typography>
        <form onSubmit={""}>
          <TextField
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            fullWidth
            required
            margin="normal"
          />
          <TextField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            fullWidth
            required
            margin="normal"
          />
          <TextField
            type="text"
            value={testimonial}
            onChange={(e) => setTestimonial(e.target.value)}
            placeholder="Your testimonial"
            fullWidth
            required
            multiline
            rows={4}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              borderRadius: "20px",
              backgroundColor: "#0317ac",
              padding: "8px 0px",
              width: "50%",
              display: "flex",
              alignItems: "center",
            }}
          >
            Submit Testimonial
          </Button>
        </form>
      </Box>
    </Grid>
  );
};

export default AddTestimonials;
