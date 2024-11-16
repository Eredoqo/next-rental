import {
  Avatar,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {  useEffect, useState } from "react";
import { getWeek } from "date-fns";
import { RentalDto } from "@/app/Dto/RentalDto";
import { useGetRentals } from "@/app/hooks/usegetRental";
import { StatusButton } from "@/app/utils/StatusButon";

export default function FilterWeek() {
  const { rentals } = useGetRentals();
  const [filteredRentals, setFilteredRentals] = useState<RentalDto[]>([]);
  const weeks = Array.from({ length: 8 }, (_, i) => i + 1);
  const [selectedWeek, setSelectedWeek] = useState(getWeek(new Date()));
  const [weekSelected, setWeekSelected] = useState(false);
  const carList = ["1", "2", "3", "4", "5", "6"];

  const handleWeekChange = (event: SelectChangeEvent<number>) => {
    const value = event.target.value as number;
    setSelectedWeek(value);
    setWeekSelected(true);
  };

  useEffect(() => {
    const filtered = rentals?.filter(
      (rental) => getWeek(new Date(rental.startDate)) === selectedWeek
    );
    setFilteredRentals(filtered || []);
  }, [selectedWeek, rentals]);

  useEffect(() => {
    const imageSrc = ""; 
    const imgElement = document.getElementById(
      "exampleImage"
    ) as HTMLImageElement;
    if (imgElement) {
      imgElement.src = imageSrc || null;
    }
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Stack
        p="24px"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          List of Booked Cars
        </Typography>
        <FormControl sx={{ width: "150px" }}>
          <InputLabel id="demo-simple-select-label">Select Week</InputLabel>
          <Select
            labelId="week-label"
            id="week-select"
            value={weekSelected ? selectedWeek : ""}
            onChange={handleWeekChange}
          >
            {weeks.map((week) => (
              <MenuItem key={week} value={week}>
                Week {week}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          padding: "0 20px 0 20px",
          height: "auto",
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>No</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Client Name</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Car Number</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Car Type</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRentals.length > 0 ? (
                filteredRentals.slice(0, 6).map((rental, index) => (
                  <TableRow key={rental.id}>
                    <TableCell sx={{ border: 0, textAlign: "center" }}>
                      {carList[index]}
                    </TableCell>
                    <TableCell sx={{ border: 0, textAlign: "center" }}>
                      <Stack
                        direction="row"
                        gap="10px"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Avatar
                          src="https://randomuser.me/api/portraits/men/1.jpg"
                          alt={rental.user.firstName}
                        />
                        {rental.user.firstName}
                      </Stack>
                    </TableCell>
                    <TableCell sx={{ border: 0, textAlign: "center" }}>
                      {rental.car.model}
                    </TableCell>
                    <TableCell sx={{ border: 0, textAlign: "center" }}>
                      {rental.car.make}
                    </TableCell>
                    <TableCell sx={{ border: 0, textAlign: "center" }}>
                      <StatusButton
                        status={
                          new Date(rental.endDate) > new Date()
                            ? "Booked"
                            : "Available"
                        }
                      />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} sx={{ textAlign: "center" }}>
                    {weekSelected
                      ? "This week hasn't any car booked"
                      : "Booked cars will be listed here by the week selected"}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
