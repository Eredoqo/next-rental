import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Link as MuiLink,
  Box,
  Stack,
} from "@mui/material";
import Link from "next/link";

import "./blog-item.css";

const BlogItem = ({ item }: any) => {
  const { imgUrl, title, description, slug } = item;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Grid
      item
      spacing={4}
      className="mb-5"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <Card
        sx={{
          borderRadius: "15px",
          padding: "20px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          style={{
            borderRadius: "10px",
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
          image={imgUrl.src}
          alt="Card image cap"
        />
        <CardContent>
          <Stack spacing={2}>
            <Typography variant="h6" style={{ color: "green" }}>
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
            {isClient && (
              <Link href={`/blogdetails/${slug}`} passHref>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "20px",
                    backgroundColor: "#0317ac",
                    padding: "8px 0px",
                    width: "35%",
                    "&:hover": {
                      backgroundColor: "#0317ac",
                    },
                  }}
                >
                  Read More
                </Button>
              </Link>
            )}
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default BlogItem;
