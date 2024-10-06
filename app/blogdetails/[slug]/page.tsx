"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Use useParams instead of useRouter
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import blogData from "../../utils/BlogData";
import Image from "next/image";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((blog) => blog.slug === slug);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Typography variant="h2">{blog.title}</Typography>
      <Image
        src={blog.imgUrl.src}
        alt={blog.title}
        width={blog.imgUrl.width}
        height={blog.imgUrl.height}
        style={{ width: "100%", height: "auto", borderRadius: "10px" }}
      />
      <Typography variant="body1" sx={{ marginTop: "20px" }}>
        {blog.description}
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginTop: "10px", fontStyle: "italic" }}
      >
        {blog.quote}
      </Typography>
    </Container>
  );
};

export default BlogDetails;
