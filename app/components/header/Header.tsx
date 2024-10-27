"use client";

import React, { useRef, useEffect, useState } from "react";
import { Box, IconButton, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logoImg from "./../../images/marlon-logo.png";

import "./header.css";

const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about/1",
    display: "About",
  },
  {
    path: "/cardetail/1",
    display: "Cars",
  },
  {
    path: "/blogdetails/1",
    display: "Blog",
  },
  {
    path: "/contact/1",
    display: "Contact",
  },
];

const Header = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const [isLogged, setIsLogged] = useState(false);

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

  useEffect(() => {
    // Check if the user is logged in by checking local storage or cookies
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLogged(true);
    }
  }, []);

  const handleLogout = () => {
    // Clear the token from local storage or cookies
    localStorage.removeItem("authToken");
    setIsLogged(false);
    router.push("/");
  };

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
              alt="logo"
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
              {isLogged ? (
                <Link href="#" className="nav__item" onClick={handleLogout}>
                  Logout
                </Link>
              ) : (
                <Link href="/login" className="nav__item">
                  Login as Admin
                </Link>
              )}
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
