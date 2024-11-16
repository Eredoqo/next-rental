import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  TextareaAutosize,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import emailjs from "emailjs-com";
// import "../../styles/booking-form.css";

interface BookingFormProps {
  toggle: () => void;
}

const BookingForm = ({ toggle }: any) => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rijoxoc",
        "template_ufihunv",
        e.currentTarget,
        "uh2R_kbxSvUJcSKXh"
      )
      .then(
        (result) => {
          console.log(result.text);
          toggle();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box component="form" onSubmit={sendEmail} className="booking-form">
      <Typography
        variant="h5"
        className="mb-4 fw-bold d-flex justify-content-center"
      >
        Booking Information
      </Typography>

      <Box className="d-flex flex-wrap">
        <TextField
          className="flex-fill me-2 mb-3"
          type="text"
          name="firstName"
          label="First Name"
          required
          fullWidth
        />
        <TextField
          className="flex-fill  mb-3"
          type="text"
          name="lastName"
          label="Last Name"
          required
          fullWidth
        />
      </Box>

      <Box className="d-flex flex-wrap">
        <TextField
          className="flex-fill me-2 mb-3"
          type="email"
          name="email"
          label="Email"
          required
          fullWidth
        />
        <TextField
          className="flex-fill mb-3"
          type="tel"
          name="phoneNumber"
          label="Phone Number"
          required
          fullWidth
        />
      </Box>

      <Box className="d-flex flex-wrap">
        <TextField
          className="flex-fill me-2 mb-3"
          type="text"
          name="fromAddress"
          label="From Address"
          required
          fullWidth
        />
        <TextField
          className="flex-fill mb-3"
          type="text"
          name="toAddress"
          label="To Address"
          required
          fullWidth
        />
      </Box>

      <Box className="d-flex flex-wrap">
        <TextField
          className="flex-fill me-2 mb-3"
          type="date"
          name="startDate"
          label="Start Date"
          InputLabelProps={{ shrink: true }}
          required
          fullWidth
        />
        <TextField
          className="flex-fill mb-3"
          type="date"
          name="endDate"
          label="End Date"
          InputLabelProps={{ shrink: true }}
          required
          fullWidth
        />
      </Box>

      <Box className="d-flex flex-wrap">
        <FormControl className="flex-fill me-2 mb-3" fullWidth>
          <InputLabel id="people-label">Number of People</InputLabel>
          <Select
            labelId="people-label"
            name="people"
            label="Number of People"
            required
          >
            <MenuItem value="1 person">1 Person</MenuItem>
            <MenuItem value="2 persons">2 Persons</MenuItem>
            <MenuItem value="3 persons">3 Persons</MenuItem>
            <MenuItem value="4 persons">4 Persons</MenuItem>
            <MenuItem value="5+ persons">5+ Persons</MenuItem>
          </Select>
        </FormControl>
        <TextField
          className="flex-fill mb-3"
          type="time"
          name="journeyTime"
          label="Time to Pick Up"
          InputLabelProps={{ shrink: true }}
          required
          fullWidth
        />
      </Box>

      <Box className="mb-3">
        <TextareaAutosize
          minRows={4}
          name="message"
          placeholder="Write your message"
          className="textarea"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
          required
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px",
        }}
      >
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            borderRadius: "20px",
            backgroundColor: "#0317ac",
            padding: "8px 0px",
            width: "50%",
          }}
        >
          Reserve Now
        </Button>
        <a href="https://wa.me/+355683048493">
          <WhatsAppIcon style={{ color: "#25d366", fontSize: "2rem" }} />
        </a>
      </Box>
    </Box>
  );
};

export default BookingForm;
