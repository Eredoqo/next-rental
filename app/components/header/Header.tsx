"use client";

import React, { useRef } from "react";
import { Container, Box, IconButton, TextField } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

import "./header.css";

const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/#about",
    display: "About",
  },
  {
    path: "/#cars",
    display: "Cars",
  },
  {
    path: "/#blogs",
    display: "Blog",
  },
  {
    path: "/#contact",
    display: "Contact",
  },
];

export default function Header() {
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => menuRef.current?.classList.toggle("menu__active");

  return (
    <Box component="header" className="header">
      <Box className="main__navbar">
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <IconButton className="mobile__menu" onClick={toggleMenu}>
              <MenuIcon />
            </IconButton>

            <Box
              sx={{ display: "flex" }}
              className="navigation"
              ref={menuRef}
              onClick={toggleMenu}
            >
              <Box className="menu">
                {navLinks.map((item, index) => (
                  <Link href={item.path} className="nav__item" key={index}>
                    {item.display}
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
