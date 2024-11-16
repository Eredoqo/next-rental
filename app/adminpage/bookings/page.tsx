"use client";

import { LayoutWrapper } from "@/app/components/admin-component/admin-sidebar";
import Layout from "@/app/components/layout";
import { RentalDto } from "@/app/Dto/RentalDto";
import { useGetRentals } from "@/app/hooks/usegetRental";
import {
  Card,
  Box,
  Typography,
  Divider,
  Stack,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function BookingsDetailsCard() {
  const { rentals,  } = useGetRentals();
  const [date, setDate] = useState("");
  const [filteredRentals, setFilteredRentals] = useState<RentalDto[]>([]);

  const handleDateChange = (event: SelectChangeEvent) => {
    const value = event.target.value as string;
    setDate(value);
    // fetchFilteredData(value);
  };

  useEffect(() => {
    const filtered = rentals?.filter(
      (rental) => new Date(rental.startDate).toISOString() === date
    );

    setFilteredRentals(filtered || []);
  }, [date, rentals]);

  return (
    <LayoutWrapper>
        <Layout/>
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        Filter by:
        <FormControl sx={{ width: "250px" }}>
          <InputLabel id="demo-simple-select-label">Start Date</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={date}
            onChange={handleDateChange}
          >
            {rentals?.map(
              (rental) =>
                rental.startDate && (
                  <MenuItem
                    key={rental.id}
                    value={new Date(rental.startDate).toISOString()}
                  >
                    {new Date(rental.startDate).toLocaleDateString()}
                  </MenuItem>
                )
            )}
          </Select>
        </FormControl>
      </Typography>
      <Stack gap={2}>
        {filteredRentals.map((rental, index) => (
          <Card key={index} sx={{ width: "450px", borderRadius: "15px" }}>
            <Box sx={{ padding: "0 30px" }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  padding: "10px 0",
                }}
              >
                Booking Details
              </Typography>
              <Divider />
              <Box sx={{ display: "flex", flexDirection: "column" }} gap={2}>
                <Stack flexDirection="row" justifyContent="space-between">
                  <Typography>Pick up location</Typography>
                  <Typography>{rental.pickUpLocation}</Typography>
                </Stack>
                <Stack flexDirection="row" justifyContent="space-between">
                  <Typography>Drop off location</Typography>
                  <Typography>{rental.dropOffLocation}</Typography>
                </Stack>
                <Stack flexDirection="row" justifyContent="space-between">
                  <Typography>Rental Duration</Typography>
                  <Typography>
                    {Math.ceil(
                      (new Date(rental.endDate).getTime() -
                        new Date(rental.startDate).getTime()) /
                        (1000 * 60 * 60 * 24)
                    )}
                    days
                  </Typography>
                </Stack>
                <Stack flexDirection="row" justifyContent="space-between">
                  <Typography>Pick up time</Typography>
                  <Typography>
                    {new Date(rental.startDate).toLocaleDateString("en-GB")}
                  </Typography>
                </Stack>
                <Stack
                  flexDirection="row"
                  justifyContent="space-between"
                  paddingBottom="10px"
                >
                  <Typography>Drop off time</Typography>
                  <Typography>
                    {new Date(rental.endDate).toLocaleDateString("en-GB")}
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Card>
        ))}
      </Stack>
    </Box>
    </LayoutWrapper>
  );
}