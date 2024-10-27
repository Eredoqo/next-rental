"use client";

import React, { useEffect, useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import Image from "next/image";
import blogData from "../../utils/BlogData";
import { Blog } from "../../@types/BlogTypes";

const BlogDetails = () => {
  const [blogData, setBlogData] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs");

        console.log(response, "??");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error("Failed to fetch blog data:", error);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <Box margin="70px 0px">
      <Container>
        {blogData.map((blog) => (
          <Box key={blog.id} sx={{ mb: 5 }}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              {blog.title}
            </Typography>
            <Image
              src={blog.imgUrl.src}
              alt={blog.title}
              width={blog.imgUrl.width}
              height={blog.imgUrl.height}
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
            <Typography variant="body1" sx={{ marginTop: "20px", mt: 10 }}>
              {blog.description}
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginTop: "10px", fontStyle: "italic" }}
            >
              {blog.quote}
            </Typography>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default BlogDetails;
