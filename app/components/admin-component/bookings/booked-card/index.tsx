import {
    Box,
    Button,
    Card,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    Typography,
  } from "@mui/material";
  import photo from "./../../../../../images/car-1.jpg";
  import { useState } from "react";
import { useGetRentals } from "@/app/hooks/usegetRental";
import { RentalDto } from "@/app/Dto/RentalDto";
import Image from "next/image";

  
  export default function BookedCard() {
    const { rentals  } = useGetRentals();
    const [carModel, setCarModel] = useState("");
    const [filteredRentals, setFilteredRentals] = useState<RentalDto[]>([]);
  
    const handleCarModelChange = (event: SelectChangeEvent) => {
      const value = event.target.value as string;
      setCarModel(value);
    //   fetchFilteredData(modelCar);
  
      const filtered = rentals?.filter((rental) => rental.car.model === value);
      setFilteredRentals(filtered || []);
    };
  
    const carModelsFilter = [
      ...new Set(rentals?.map((rental) => rental?.car?.model)),
      ...new Set(rentals?.map((rental) => rental?.car?.make)),
    ];
  
    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          Sort by:
          <FormControl sx={{ width: "250px", borderColor: "black" }}>
            <InputLabel id="demo-simple-select-label">Model</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={carModel}
              onChange={handleCarModelChange}
            >
              {carModelsFilter.map((model) => (
                <MenuItem key={model} value={model}>
                  {model}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Typography>
        {filteredRentals.map((rental, index) => (
          <Card
            key={index}
            sx={{
              display: "flex",
              flexDirection: "row",
              padding: "15px",
              gap: 2,
              borderRadius: "15px",
            }}
          >
            <Stack>
              <Image alt="" style={{ height: "150px" }} src={photo} />
            </Stack>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Stack flexDirection="row">
                <Typography variant="h6">
                  {rental.car.model || "Select a model"}
                </Typography>
                <Typography sx={{ marginLeft: "10px" }} variant="h6">
                  {rental.car.make}
                </Typography>
              </Stack>
              <Typography variant="h6">
                Booked by:{rental.user.firstName}
              </Typography>
              <Stack>
                <Typography>Icons of how many have booked</Typography>
              </Stack>
            </Box>
            <Stack sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Typography
                sx={{
                  border: "1px solid grey",
                  background: "lightgrey",
                  padding: "15px 20px",
                  borderRadius: "10px",
                }}
              >
                Total Costs: {rental.totalCost || 0} $
              </Typography>
              <Button variant="contained" color="error">
                Cancel
              </Button>
            </Stack>
          </Card>
        ))}
      </Box>
    );
  }