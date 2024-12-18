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
        <img src={Logo} alt="logo" height={"70"} width="200" />
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
                 <li className="login-btn">
    <NavLink
      to={"/login"}
      className="login-button"
      style={{
        backgroundColor: "#130939", // Button background color
        color: "white",              // Text color
        padding: "10px 20px",        // Padding for the button
        borderRadius: "5px",         // Rounded corners
        textAlign: "center",         // Center text inside button
        textDecoration: "none",      // Remove underline
        display: "inline-block",     // Make sure it behaves like a block element
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
              <img src={Logo} alt="logo" height={"70"} width="250" />
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
                <li className="login-btn">
    <NavLink
      to={"/login"}
      className="login-button"
      style={{
        backgroundColor: "#130939", // Button background color
        color: "white",              // Text color
        padding: "10px 20px",        // Padding for the button
        borderRadius: "5px",         // Rounded corners
        textAlign: "center",         // Center text inside button
        textDecoration: "none",      // Remove underline
        display: "inline-block",     // Make sure it behaves like a block element
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
