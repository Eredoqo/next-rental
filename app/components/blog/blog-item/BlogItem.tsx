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
          style={{
            borderRadius: "10px",
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
          top
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
              <Button
                variant="contained"
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "#0317ac",
                  padding: "8px 0px",
                  width: "35%",
                }}
              >
                <Link href={`/blogdetails/${slug}`} passHref>
                  <Typography
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      fontWeight: 400,
                      fontSize: "14px",
                    }}
                  >
                    Read More
                  </Typography>
                </Link>
              </Button>
            )}
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default BlogItem;
