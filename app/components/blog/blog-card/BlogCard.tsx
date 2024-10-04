import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const BlogCard = ({ blog }: any) => {
  return (
    <Card>
      <CardMedia component="img" image={blog.imgUrl} alt="Card image cap" />
      <CardContent>
        <Typography variant="h5">{blog.title}</Typography>
        <Typography variant="body1">{blog.description}</Typography>
        <Box
          sx={{
            pt: 3,
            mt: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography component="span">
            <PersonIcon /> {blog.author}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Typography component="span">
              <CalendarTodayIcon /> {blog.date}
            </Typography>

            <Typography component="span">
              <AccessTimeIcon /> {blog.time}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
