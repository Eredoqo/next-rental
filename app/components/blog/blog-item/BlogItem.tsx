import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Link,
  Box,
  Stack,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const BlogItem = ({ item }: any) => {
  const { imgUrl, title, author, date, description, time } = item;

  return (
    <Grid
      item
      lg={4}
      md={6}
      sm={6}
      className="mb-5"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <Card
        sx={{
          borderRadius: "15px",
          padding: "20px",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          style={{ borderRadius: "15px" }}
          image={imgUrl.src}
          alt="Card image cap"
        />
        <CardContent>
          <Stack spacing={2}>
            <Typography variant="h5" style={{ color: "green" }}>
              {title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {description.length > 110
                ? description.substr(0, 110)
                : description}
            </Typography>
            <Button
              variant="contained"
              sx={{
                borderRadius: "20px",
                backgroundColor: "#0317ac",
                padding: "8px 0px",
                width: "35%",
              }}
            >
              <Link
                href={`/cars/${""}`}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  fontWeight: 500,
                }}
              >
                Read More
              </Link>
            </Button>
          </Stack>

          <Box
            sx={{
              pt: 3,
              mt: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography component="span" className="blog__author">
              <PersonIcon sx={{ color: "#f9a826" }} /> {author}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Typography component="span" className="section__description">
                <CalendarTodayIcon sx={{ color: "#f9a826" }} /> {date}
              </Typography>

              <Typography component="span" className="section__description">
                <AccessTimeIcon sx={{ color: "#f9a826" }} /> {time}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default BlogItem;
