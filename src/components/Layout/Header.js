import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "../../images/msariilogo.png";

import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <img src={Logo} alt="logo" height={"70"} width="150" />
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
  <li>
    <NavLink activeClassName="active" to={"/"}>
      Home
    </NavLink>
  </li>
  <li>
    <NavLink to={"/menu"}>Product</NavLink>
  </li>
  <li>
    <NavLink to={"/about"}>About</NavLink>
  </li>
  <li>
    <NavLink to={"/contact"}>Pricing</NavLink>
  </li>
  <li>
    <NavLink to={"/contact"}>Support</NavLink>
  </li>
  <li>
    <NavLink to={"/contact"}>Store</NavLink>
  </li>
  <li className="auth-options">
  <NavLink
      to={"/signup"}
      className="signup-button"
      style={{
        color: "#130939",
        fontWeight: "bold",
      }}
    >
      Sign Up
    </NavLink>
    <span className="vertical-line"></span>
    <NavLink
      to={"/login"}
      className="login-button"
      style={{
        color: "#130939",
      }}
    >
      Login
    </NavLink>
   
  </li>
</ul>

    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "white" }}>
          <Toolbar>
            <IconButton
              color="black"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <img src={Logo} alt="logo" height={"55"} width="160" />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="navigation-menu">
  <li>
    <NavLink activeClassName="active" to={"/"}>
      Home
    </NavLink>
  </li>
  <li>
    <NavLink to={"/menu"}>Product</NavLink>
  </li>
  <li>
    <NavLink to={"/about"}>About</NavLink>
  </li>
  <li>
    <NavLink to={"/contact"}>Pricing</NavLink>
  </li>
  <li>
    <NavLink to={"/contact"}>Support</NavLink>
  </li>
  <li>
    <NavLink to={"/contact"}>Store</NavLink>
  </li>

  {/* Login and Sign Up with vertical line */}
  <li className="auth-options">
  <NavLink
      to={"/signup"}
      className="signup-button"
      style={{
        color: "#130939", // Text color
        fontWeight: "bold", // Bold for Sign Up
      }}
    >
      Sign Up
    </NavLink>
    <span className="vertical-line"></span>
    
    <NavLink
      to={"/login"}
      className="login-button"
      style={{
        color: "#130939", // Text color
      }}
    >
      Login
    </NavLink>
  </li>
</ul>

            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
