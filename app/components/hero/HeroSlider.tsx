"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  IconButton,
  Stack,
} from "@mui/material";
import { styled } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";
import slider1 from "../../images/slider-img/slider-1.jpg";
import slider2 from "../../images/slider-img/slider-2.jpg";
import slider3 from "../../images/slider-img/slider-3.jpg";
import logoImg from "../../images/marlon-logo.png";
import "./../header/header.css";

interface SliderItemProps {
  bgImage: string;
  isVisible: boolean;
}

const SliderContainer = styled(Box)({
  position: "relative",
  height: "650px",
  overflow: "hidden",
  zIndex: 0, // Ensures it's behind the content below
});

const SliderItem = styled(Box)<SliderItemProps>(({ bgImage, isVisible }) => ({
  maxWidth: "100%",
  height: "650px",
  background: `linear-gradient(rgba(0, 13, 107, 0.5), rgba(0, 13, 107, 0.5)), url(${bgImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  opacity: isVisible ? 1 : 0,
  transition: "opacity 1s ease-in-out",
  position: isVisible ? "relative" : "absolute", // Absolute only for inactive slides
  top: 0,
  left: 0,
  width: "100%",
}));

const sliderImages = [slider1.src, slider2.src, slider3.src];

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

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => menuRef.current?.classList.toggle("menu__active");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
    <SliderContainer>
      <Box component="header" className="header" ref={headerRef}>
        <Box
          className="main__navbar"
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
      {sliderImages.map((image, index) => (
        <SliderItem
          key={index}
          bgImage={image}
          isVisible={index === currentSlide}
        >
          <Container>
            <Grid container alignItems="center" style={{ paddingTop: "150px" }}>
              <Grid item>
                <Typography variant="h4" color="#fff" gutterBottom>
                  Cars For Rent $25 to $50 Per Day
                </Typography>
                <Typography variant="h3" color="#fff" gutterBottom>
                  Reserve Now and See Our Offers
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    mt: 2,
                    backgroundColor: "#fff",
                    color: "#000d6b",
                    "&:hover": {
                      backgroundColor: "#000d6b",
                      color: "#000",
                    },
                  }}
                >
                  Reserve Now
                </Button>
              </Grid>
            </Grid>
          </Container>
        </SliderItem>
      ))}
    </SliderContainer>
  );
};

export default HeroSlider;
