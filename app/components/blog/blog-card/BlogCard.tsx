import React from "react";
import {
  Card,
  CardMedia,
  CardImg,
  CardBody,
  CardContent,
  CardTitle,
  Typography,
  Box,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const BlogCard = ({ blog }: any) => {
  return (
    <Card>
      <CardImg top src={blog.imgUrl} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">{blog.title}</CardTitle>
        <Typography>{blog.description}</Typography>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
