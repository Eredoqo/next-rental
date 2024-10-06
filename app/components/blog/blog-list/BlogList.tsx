"use client";

import blogData from "@/app/utils/BlogData";
import BlogItem from "../blog-item/BlogItem";
import "./../blog-details/blog-details.css";
import { Box, Stack, Typography } from "@mui/material";

const BlogList = () => {
  return (
    <Box id="blogs" pt={5} pb={5} pl={10} pr={10}>
      <Stack alignItems="center" pb={8}>
        <Typography sx={{ color: "#000", fontWeight: 600, fontSize: "1.7rem" }}>
          Explore our blogs
        </Typography>
        <Typography
          sx={{ color: "#098825", fontWeight: 600, fontSize: "2.5rem" }}
        >
          Latest Blogs
        </Typography>
      </Stack>
      <Stack direction="row" spacing={3}>
        {blogData.map((item) => (
          <BlogItem item={item} key={item.id} />
        ))}
      </Stack>
    </Box>
  );
};

export default BlogList;
