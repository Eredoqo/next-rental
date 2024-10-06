"use client";

import React, { useRef, useEffect } from "react";
import { Box, IconButton, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";
import logoImg from "./../../images/marlon-logo.png";

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

const loginNavlinks = [
  {
    path: "/#login",
    display: "Login",
  },
  {
    path: "/#logout",
    display: "Logout",
  },
];

export default function Header() {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => menuRef.current?.classList.toggle("menu__active");

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 50) {
          headerRef.current.classList.add("scrolled");
        } else {
          headerRef.current.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box component="header" className="header" ref={headerRef}>
      <Box className="main__navbar">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <IconButton className="mobile__menu" onClick={toggleMenu}>
            <MenuIcon />
          </IconButton>

          <Stack ml="50px">
            <Image
              style={{ height: "58px", width: "80px" }}
              src={logoImg}
              alt=""
            />
          </Stack>

          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
            className="navigation"
            ref={menuRef}
            onClick={toggleMenu}
          >
            <Stack direction="row" className="menu">
              {navLinks.map((item, index) => (
                <Link href={item.path} className="nav__item" key={index}>
                  {item.display}
                </Link>
              ))}
            </Stack>
            <Stack direction="row" className="menu">
              {loginNavlinks.map((item, index) => (
                <Link href={item.path} className="nav__item" key={index}>
                  {item.display}
                </Link>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
