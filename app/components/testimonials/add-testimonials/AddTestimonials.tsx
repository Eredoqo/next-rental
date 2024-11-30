"use client";
import React, { useEffect, useState } from "react";

import { Grid, Typography, Box, TextField, Button, Stack } from "@mui/material";

const AddTestimonials = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [testimonial, setTestimonial] = useState();

  return (
    <Stack width="40%">
    <Grid item lg={5} className="mt-5">
      <Box className="testimonial-form">
        <Typography variant="h5">Submit your testimonial</Typography>
        <form onSubmit={() => console.log("Add testimonial")}>
          <TextField
            type="text"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
            placeholder="Your name"
            fullWidth
            required
            margin="normal"
          />
          <TextField
            type="email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            placeholder="Your email"
            fullWidth
            required
            margin="normal"
          />
          <TextField
            type="text"
            value={testimonial}
            onChange={(e: any) => setTestimonial(e.target.value)}
            placeholder="Your testimonial"
            fullWidth
            required
            multiline
            rows={5}
            margin="normal"
          />
          <Button
            variant="contained"
            sx={{
              marginTop:"16px",
              borderRadius: "20px",
              backgroundColor: "#0317ac",
              padding: "8px 0px",
              width: "50%",
              "&:hover": {
                backgroundColor: "#0317ac",
              },
            }}
          >
            Submit Testimonial
          </Button>
        </form>
      </Box>
    </Grid>
    </Stack>
  );
};

export default AddTestimonials;
