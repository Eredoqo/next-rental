import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardContent,
  CardTitle,
  Typography,
  Box,
} from "@mui/material";

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
