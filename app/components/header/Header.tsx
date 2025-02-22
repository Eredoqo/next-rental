import React, { useRef, useEffect, useState } from "react";
import { Box, IconButton, Stack, Button, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { jwtDecode, JwtPayload } from "jwt-decode"; // Ensure correct import
import logoImg from "./../../images/marlon-logo.png";
import LoginModal from "../LoginModal";
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

type MyJwtPayload = JwtPayload & { data: { email: string; password: string } };

const Header = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const [isLogged, setIsLogged] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [user, setUser] = useState<any>(null); 

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
    const token = localStorage.getItem("authToken");
    if (token) {
      const decodedToken = jwtDecode<MyJwtPayload>(token);
      setUser(decodedToken);
      setIsLogged(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLogged(false);
    setUser(null); 
    router.push("/");
  };

  const handleLoginOpen = () => {
    setIsLoginModalOpen(true);
  };

  const handleLoginClose = () => {
    setIsLoginModalOpen(false);
  };

  const handleLoginSuccess = (user: any) => {
    setIsLogged(true);
    setUser(user); 
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
                <>
                  <Typography>{user?.name}</Typography>{" "}
                  {/* Display user name */}
                  <Link href="#" className="nav__item" onClick={handleLogout}>
                    Logout
                  </Link>
                  <Button
                    onClick={() => router.push("/adminpage")}
                    variant="outlined"
                    sx={{  borderRadius: "10px",
                      backgroundColor: "#f9a826",
                      width: "100%",   "&:hover": {
                        backgroundColor: "#f9a826", 
                      }}}
                  >
                    <Typography color="#000">Admin Dashboard</Typography>
                  </Button>
                </>
              ) : (
                <Button
                onClick={handleLoginOpen}
                variant="contained"
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "#0317ac",
                  padding: "8px 16px",
                  "&:hover": {
                    backgroundColor: "#0317ac",
                  },
                }}
              >
                  Login as Admin
                </Button>
              )}
            </Stack>
          </Stack>
        </Box>
      </Box>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={handleLoginClose}
        onLoginSuccess={handleLoginSuccess}
      />
    </Box>
  );
};

export default Header;
