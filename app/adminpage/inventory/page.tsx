"use client"

import { LayoutWrapper } from "@/app/components/admin-component/admin-sidebar";
import Layout from "@/app/components/layout";
import { useGetCars } from "@/app/hooks/useGetCars";
import { carPhotos } from "@/app/utils/carPhotos";
import { Box, Card, Divider, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";


export interface InventoryCardProps {
  name: string;
  model: string;
  year: number;
  status: string;
  price: number;
  index: number;
  isNew: string;
  bookedTill?: string;
}

function InventoryCard({
  name,
  model,
  year,
  status,
  price,
  index,
  isNew,
  bookedTill,
}: InventoryCardProps) {
  const imageUrl = carPhotos[index]?.url;
  const formattedDate = bookedTill
    ? new Date(bookedTill).toLocaleDateString()
    : "";
  const bookingStatus =
    bookedTill && new Date(bookedTill) > new Date() ? "Booked" : "Available";

  return (
    <Card sx={{ width: "380px", minHeight: "300px", borderRadius: "20px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "1rem",
          gap: "1rem",
        }}
      >
        <Stack alignItems="flex-end" flexDirection="row" gap={4}>
          {bookingStatus === "Booked" ? (
            <Typography
              sx={{
                borderRadius: "10px",
                padding: "5px 15px",
                background: "#969AA7",
              }}
            >
              Booked till {formattedDate}
            </Typography>
          ) : isNew && status === "Available" ? (
            <Stack direction="row" spacing={2}>
              <Typography
                sx={{
                  borderRadius: "10px",
                  padding: "5px 15px",
                  background: "linear-gradient(to right, #F5C57D, #F37028)",
                }}
              >
                {isNew}
              </Typography>
              <Typography
                sx={{
                  borderRadius: "10px",
                  padding: "5px 15px",
                  background: "#11B98F",
                }}
              >
                {status}
              </Typography>
            </Stack>
          ) : (
            <Typography
              sx={{
                borderRadius: "10px",
                padding: "5px 15px",
                background: "#11B98F",
              }}
            >
              {status}
            </Typography>
          )}
        </Stack>
        <Stack alignItems="center">
          <Image
            style={{ height: "60%", width: "60%", borderRadius: " 10px" }}
            src={imageUrl}
            alt={`${name} ${model}`}
            width={200}
            height={200}
          />
        </Stack>
        <Stack>
          <Stack flexDirection="row" gap={1}>
            <Typography color="textSecondary">{name}</Typography>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ bgcolor: "black" }}
            />
            <Typography color="textSecondary">{model}</Typography>
          </Stack>
          <Stack flexDirection="row" justifyContent="space-between">
            <Typography>Spring, {year}</Typography>
            <Typography>${price} / hour</Typography>
          </Stack>
        </Stack>
      </Box>
    </Card>
  );
}

export default function InventoryCards() {
  const { cars } = useGetCars();

  return (
    <LayoutWrapper>
      <Layout/>
    <Grid sx={{ paddingLeft: "20px" }} container spacing={2}>
      {cars?.map((car, i) => (
        <Grid key={car.id} item xs={12} sm={4}>
          <InventoryCard
            name={car.make}
            model={car.model}
            year={car.year}
            status={car.status}
            price={car.carSpec && car.carSpec[0] ? car.carSpec[0].price : 0}
            index={i}
            isNew={car.isNew}
            bookedTill={car.rentals[car.rentals.length - 1]?.endDate?.toString()}
          />
        </Grid>
      ))}
      
    </Grid>
    </LayoutWrapper>
  );
}

