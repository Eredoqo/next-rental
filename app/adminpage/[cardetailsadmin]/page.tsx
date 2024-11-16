"use client"

import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
    Card,
  } from "@mui/material";
  import { useEffect, useState } from "react";
//   import { useNavigate } from "react-router-dom";

//   import { Car } from "@/lib/components-admin/utils";
//   import { useGetCar } from "@/hooks/useGetCar";
//   import { CarDto } from "@/dtos/car/CarDto";
  
  export default function CarTable() {
    // const { cars } = useGetCar();
    // const [cardetails, setCarDetails] = useState<CarDto[]>([]);
    // const navigate = useNavigate();
    const [carDeleted, setCarDeleted] = useState(false);
  
    // useEffect(() => {
    //   if (cars) {
    //     setCarDetails(cars);
    //   }
    // }, [cars]);
  
    // useEffect(() => {
    //   if (cars) {
    //     setCarDetails(cars);
    //   } else {
    //     setCarDetails([]);
    //   }
    // }, [cars]);
  
    // if (!cars) {
    //   return <div>Loading...</div>;
    // }
  
    const handleDelete = async (id: string) => {
    //   try {
    //     await axios.delete(`${APIURL}/cardetailsadmin/${id}`);
    //     setCarDetails((prevCars) =>
    //       prevCars.filter((car: CarDto) => car.id !== id)
    //     );
    //     setCarDeleted(true);
    //   } catch (error) {
    //     console.error(error);
    //   }
    };
  
    const handleUpdate = (id: string) => {
    //   navigate(`/updatecars/${id}`);
    };
  
    return (
      <Card
        sx={{
          width: "100%",
          maxWidth: "1200px",
          padding: "20px",
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Make</TableCell>
                <TableCell>Model</TableCell>
                <TableCell>Year</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>is New</TableCell>
                <TableCell>Car Title</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Rated</TableCell>
                <TableCell>Body</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Mileage</TableCell>
                <TableCell>Transmission</TableCell>
                <TableCell>Seats</TableCell>
                <TableCell>Fuel</TableCell>
                <TableCell>GPS</TableCell>
                <TableCell>Child Seat</TableCell>
                <TableCell>Aircondition</TableCell>
                <TableCell>Music</TableCell>
                <TableCell>Car Kit</TableCell>
                <TableCell>Audio</TableCell>
                <TableCell>Climate Control</TableCell>{" "}
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {cardetails.map((car) => (
                <TableRow key={car.id}>
                  <TableCell>{car.make}</TableCell>
                  <TableCell>{car.model}</TableCell>
                  <TableCell>{car.year}</TableCell>
                  <TableCell>{car.status}</TableCell>
                  <TableCell>{car.isNew ? "Yes" : "No"}</TableCell>
                  <TableCell>
                    {car.CarSpec && car.CarSpec[0] ? car.CarSpec[0].carTitle : ""}
                  </TableCell>
                  <TableCell>
                    {car.CarSpec && car.CarSpec[0] ? car.CarSpec[0].image : ""}
                  </TableCell>
                  <TableCell>
                    {car.CarSpec && car.CarSpec[0]
                      ? car.CarSpec[0].description
                      : ""}
                  </TableCell>
                  <TableCell>
                    {car.CarSpec && car.CarSpec[0] ? car.CarSpec[0].rated : ""}
                  </TableCell>
                  <TableCell>
                    {car.CarSpec && car.CarSpec[0] ? car.CarSpec[0].body : ""}
                  </TableCell>
                  <TableCell>
                    {car.CarSpec && car.CarSpec[0] ? car.CarSpec[0].price : ""}
                  </TableCell>
                  <TableCell>
                    {car.CarSpec && car.CarSpec[0] ? car.CarSpec[0].mileage : ""}
                  </TableCell>
                  <TableCell>
                    {car.CarSpec && car.CarSpec[0]
                      ? car.CarSpec[0].transmission
                      : ""}
                  </TableCell>
                  <TableCell>
                    {car.CarSpec && car.CarSpec[0] ? car.CarSpec[0].seats : ""}
                  </TableCell>
                  <TableCell>
                    {car.CarSpec && car.CarSpec[0] ? car.CarSpec[0].fuel : ""}
                  </TableCell>
                  <TableCell>
                    {car.CarSpec && car.CarSpec[0]
                      ? car.CarSpec[0].gps
                        ? "Yes"
                        : "No"
                      : ""}
                  </TableCell>
                  <TableCell>
                    {car.CarSpec && car.CarSpec[0]
                      ? car.CarSpec[0].childSeat
                      : ""}
                  </TableCell>
                  <TableCell>
                    {car.CarSpec && car.CarSpec[0]
                      ? car.CarSpec[0].aircondition
                        ? "Yes"
                        : "No"
                      : ""}
                  </TableCell>
                  <TableCell>
                    {car.CarSpec && car.CarSpec[0]
                      ? car.CarSpec[0].music
                        ? "Yes"
                        : "No"
                      : ""}
                  </TableCell>
                  <TableCell>
                    {car.CarSpec && car.CarSpec[0]
                      ? car.CarSpec[0].carKit
                        ? "Yes"
                        : "No"
                      : ""}
                  </TableCell>
                  <TableCell>
                    {car.CarSpec && car.CarSpec[0]
                      ? car.CarSpec[0].audio
                        ? "Yes"
                        : "No"
                      : ""}
                  </TableCell>
                  <TableCell>
                    {car.CarSpec && car.CarSpec[0]
                      ? car.CarSpec[0].climateControl
                        ? "Yes"
                        : "No"
                      : ""}
                  </TableCell>
                  <TableCell>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        color="secondary"
                        variant="outlined"
                        onClick={() => handleUpdate(car.id)}
                      >
                        Update
                      </Button>
                      <Button
                        sx={{ marginLeft: "30px" }}
                        color="error"
                        variant="contained"
                        onClick={() => handleDelete(car.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))} */}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    );
  }
  