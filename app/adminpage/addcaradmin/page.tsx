"use client";

import { useState } from "react";
// import axios from "axios";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
} from "@mui/material";
import Layout from "@/app/components/layout";
import { LayoutWrapper } from "@/app/components/admin-component/admin-sidebar";
// import { APIURL } from "@/utils/constants";

export default function NewCar() {
  const [make, setMake] = useState("");
  const [isNew, setIsNew] = useState(false);
  const [model, setModel] = useState("");
  const [year, setYear] = useState(0);
  const [status, setStatus] = useState("");
  const [carTitle, setCarTitle] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imageString, setImageString] = useState("");
  const [description, setDescription] = useState("");
  const [rated, setRated] = useState(0);
  const [body, setBody] = useState("");
  const [price, setPrice] = useState(0);
  const [mileage, setMileage] = useState(0);
  const [transmission, setTransmission] = useState("");
  const [seats, setSeats] = useState(0);
  const [fuel, setFuel] = useState("");
  const [gps, setGps] = useState(false);
  const [childSeat, setChildSeat] = useState("");
  const [aircondition, setAircondition] = useState(false);
  const [music, setMusic] = useState(false);
  const [carKit, setCarKit] = useState(false);
  const [audio, setAudio] = useState(false);
  const [climateControl, setClimateControl] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const car = {
      make,
      model,
      year,
      status,
      isNew,
      carSpec: {
        carTitle,
        image: imageString,
        description,
        rated,
        body,
        price,
        mileage,
        transmission,
        seats,
        fuel,
        gps,
        childSeat,
        aircondition,
        music,
        carKit,
        audio,
        climateControl,
      },
    };

    try {
    //   await axios.post(`${APIURL}/addNewCar`, car, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
      alert("Car added successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to add car");
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageString(reader.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <>
    <LayoutWrapper>
    <Layout/>
      <form style={{ margin: "100px 0px 200px 0px" }} onSubmit={handleSubmit}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          style={{ padding: "0 80px" }}
        >
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              label="Make"
              value={make}
              onChange={(e) => setMake(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Year"
              value={year}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                setYear(isNaN(value) ? 0 : value);
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Car Title"
              value={carTitle}
              onChange={(e) => setCarTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="raised-button-file"
              type="file"
              onChange={handleImageChange}
            />
            <label htmlFor="raised-button-file">
              <Button
                variant="outlined"
                component="span"
                color="primary"
                style={{ borderColor: "black", color: "black" }}
              >
                Upload Image
              </Button>
            </label>
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Rated"
              value={rated}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                setRated(isNaN(value) ? 0 : value);
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Price"
              value={price}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                setPrice(isNaN(value) ? 0 : value);
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Mileage"
              value={mileage}
              onChange={(e) => setMileage(parseInt(e.target.value))}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Transmission"
              value={transmission}
              onChange={(e) => {
                setTransmission(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Seats"
              value={seats}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                setSeats(isNaN(value) ? 0 : value);
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Fuel"
              value={fuel}
              onChange={(e) => setFuel(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={gps}
                  onChange={(e) => setGps(e.target.checked)}
                />
              }
              label="GPS"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Child Seat"
              value={childSeat}
              onChange={(e) => setChildSeat(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={aircondition}
                  onChange={(e) => setAircondition(e.target.checked)}
                />
              }
              label="Air Condition"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={music}
                  onChange={(e) => setMusic(e.target.checked)}
                />
              }
              label="Music"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={carKit}
                  onChange={(e) => setCarKit(e.target.checked)}
                />
              }
              label="Car Kit"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={audio}
                  onChange={(e) => setAudio(e.target.checked)}
                />
              }
              label="Audio"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={climateControl}
                  onChange={(e) => setClimateControl(e.target.checked)}
                />
              }
              label="Climate Control"
            />
          </Grid>
        </Grid>
        <Button
          sx={{ margin: "0 80px", padding: "10px", width: "20%" }}
          type="submit"
          variant="contained"
          disabled={
            !make ||
            !model ||
            !year ||
            !status ||
            !carTitle ||
            !image ||
            !description ||
            !rated
          }
        >
          Add Car
        </Button>
    </form>
</LayoutWrapper>
    </>
  );
}