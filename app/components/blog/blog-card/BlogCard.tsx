import React from "react";
import {
  Card,
  CardMedia,
  Typography,
} from "@mui/material";

const BlogCard = ({ blog }: any) => {
  return (
    <Card>
      <CardMedia component="img" src={blog.imgUrl} alt="Card image cap" />
        <Typography component="h5">{blog.title}</Typography>
        <Typography component="h5">{blog.title}</Typography>
    </Card>
  );
};

export default BlogCard;
