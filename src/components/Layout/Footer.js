import React from "react";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";
// import Library from "../images/Social icon.png"; 
import SocialIcon from "../../images/Social icon.png"
import SocialIcon1 from "../../images/Social icon (1).png"
import SocialIcon2 from "../../images/Social icon (2).png"
import SocialIcon3 from "../../images/Social icon (3).png"
import SocialIcon4 from "../../images/Social icon (4).png"

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#12083D", color: "white",pt:2,pb:2}}>
   <Grid container spacing={4} sx={{ p: 5 }}>
  {/* About Section */}
  <Grid item xs={12} sm={6} md={3.5} >
    <Typography variant="h6" sx={{ color: "#F5AB21", mb: 2 }}>
      About
    </Typography>
    <Typography variant="body1" sx={{ opacity: 0.8, lineHeight: 1.8 }}>
      Based in the UAE, Msarii Technology leads strategy, while Msarii Labs
      powers operations—turning ideas into tools that drive transformation.
    </Typography>
    <Typography variant="body2" sx={{ mt: 2, opacity: 0.8 }}>
      Email: support@msarii.com
    </Typography>
    <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
      Phone: +91 8190001828
    </Typography>
  </Grid>

  {/* Quick Links */}
  <Grid item xs={12} sm={6} md={1.5}>
    <Typography variant="h6" sx={{ color: "#F5AB21", mb: 2 }}>
      Quick Links
    </Typography>
    <Typography variant="body2" sx={{ mb: 1, cursor: "pointer" }}>
      Home
    </Typography>
    <Typography variant="body2" sx={{ mb: 1, cursor: "pointer" }}>
      About Us
    </Typography>
    <Typography variant="body2" sx={{ mb: 1, cursor: "pointer" }}>
      Blog
    </Typography>
    <Typography variant="body2" sx={{ mb: 1, cursor: "pointer" }}>
      Projects
    </Typography>
    <Typography variant="body2" sx={{ mb: 1, cursor: "pointer" }}>
      Careers
    </Typography>
    <Typography variant="body2" sx={{ cursor: "pointer" }}>
      Contact Us
    </Typography>
  </Grid>

  {/* Resources */}
  <Grid item xs={12} sm={6} md={1.5}>
    <Typography variant="h6" sx={{ color: "#F5AB21", mb: 2 }}>
      Resources
    </Typography>
    <Typography variant="body2" sx={{ mb: 1, cursor: "pointer" }}>
      Knowledge Base
    </Typography>
    <Typography variant="body2" sx={{ mb: 1, cursor: "pointer" }}>
      Product Features
    </Typography>
    <Typography variant="body2" sx={{ mb: 1, cursor: "pointer" }}>
      eBooks
    </Typography>
    <Typography variant="body2" sx={{ mb: 1, cursor: "pointer" }}>
      Blogs
    </Typography>
    <Typography variant="body2" sx={{ cursor: "pointer" }}>
      Community
    </Typography>
  </Grid>

  {/* Connect */}
  <Grid item xs={12} sm={6} md={1.5}>
    <Typography variant="h6" sx={{ color: "#F5AB21", mb: 2 }}>
      Connect
    </Typography>
    <Typography variant="body2" sx={{ mb: 1, cursor: "pointer" }}>
      Affiliates
    </Typography>
    <Typography variant="body2" sx={{ mb: 1, cursor: "pointer" }}>
      Educator Signup
    </Typography>
    <Typography variant="body2" sx={{ mb: 1, cursor: "pointer" }}>
      Learner Signup
    </Typography>
    <Typography variant="body2" sx={{ mb: 1, cursor: "pointer" }}>
      Raise a Ticket
    </Typography>
    <Typography variant="body2" sx={{ cursor: "pointer" }}>
      Feature Request
    </Typography>
  </Grid>

  {/* Newsletter */}
  <Grid item xs={12} sm={6} md={4}>
    <Box
      sx={{
        bgcolor: "white",
        color: "#12083D",
        p: 3,
        borderRadius: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="h6" sx={{ mb: 1 }}>
        Weekly Newsletter
      </Typography>
      <Typography variant="body2" sx={{ mb: 3, color: "#6B6B6B" }}>
        Get blog articles and offers via email
      </Typography>
      {/* <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}> */}
        <TextField
        sx={{
          width: "80%",
          
        }}
          variant="outlined"
          placeholder="Your Email"
          size="small"
          // sx={{ width: "60%" }}
        />
        
      {/* </Box> */}
      <Button
          variant="contained"
          sx={{
            width: "80%",
            bgcolor: "#12083D",
            ":hover": { bgcolor: "#F5AB21" },
            mt: 2,
          }}
          className=""
        >
          Subscribe
        </Button>
    </Box>
  </Grid>
</Grid>



      {/* Newsletter */}
      <Box
  sx={{
    mt: 5,
    bgcolor: "white",
    color: "#12083D",
    p: 2,
    borderRadius: 2,
    textAlign: "center",
  }}
>
  <Grid container alignItems="center">
    {/* Copyright Text - Left Side */}
    <Grid item xs={6}>
      <Typography variant="body2" sx={{ opacity: 0.7 ,color: "#59588D"}}>
        © 2024 Msarii. All rights reserved.
      </Typography>
    </Grid>

    {/* Social Media Icons - Right Side */}
    <Grid item xs={6} sx={{ textAlign: "right" }}>
    <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
    <img
            src={SocialIcon}
          alt="Facebook"
          style={{ width: 24, height: 24, cursor: "pointer" }}
        />
        <img
  src={SocialIcon1}          alt="Twitter"
          style={{ width: 24, height: 24, cursor: "pointer" }}
        />
        <img
            src={SocialIcon2}
          alt="YouTube"
          style={{ width: 24, height: 24, cursor: "pointer" }}
        />
        <img
            src={SocialIcon3}
          alt="GitHub"
          style={{ width: 24, height: 24, cursor: "pointer" }}
        />
        <img
           src={SocialIcon4}
          alt="LinkedIn"
          style={{ width: 24, height: 24, cursor: "pointer" }}
        />
      </Box>
    </Grid>
  </Grid>
</Box>

      {/* Footer Bottom */}
      <Typography
        variant="body2"
        sx={{ mt: 3, textAlign: "center", opacity: 0.6 }}
      >
        Terms of Use | Privacy Policy | © 2024 Msarii Technology
      </Typography>
    </Box>
  );
};

export default Footer;
