import React, { useState } from 'react';
import { Grid, Typography, Box, Breadcrumbs, Link, MenuItem, Menu } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';
import Blog from "../images/blogfood.png"; 
import Blog1 from "../images/Rectangle 2.png"; 
import Blog2 from "../images/Rectangle 3.png"; 
import Blog3 from "../images/Rectangle 4.png"; 
import Layout from '../components/Layout/Layout';
import Veni from "../images/veni.png"; 
import { useNavigate } from 'react-router-dom';


const Blogs = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    // Handle opening the menu when clicking the box
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      setOpen(true);
    };
    const handleBlogSignup = () => {
        navigate('/blog-signup');  // Navigate to the blog-signup page
        setOpen(false);  // Close the menu after navigation
      };
      const handleBlogCreate = () => {
        navigate('/blog-create');  // Navigate to the blog-signup page
        setOpen(false);  // Close the menu after navigation
      };
      const handleHome = () => {
        navigate('/');  // Navigate to the blog-signup page
        setOpen(false);  // Close the menu after navigation
      };
    // Handle closing the menu
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <Layout>
          <div style={{ backgroundColor: "", height: "auto" }}>
    <Box sx={{ p: 2 ,marginTop:"15px",          marginBottom: "20px"}}>
      <Grid container spacing={4} sx={{ display: 'flex', alignItems: 'flex-start' }}>
        {/* Left Column: Image */}
        <Grid item xs={12} sm={6} md={6}>
        <Box
      sx={{
        width: '100%',
        height: 'auto',
        aspectRatio: '531 / 670', // Maintains the aspect ratio
        borderRadius: '20px',
        backgroundImage: `url(${Blog})`,
        backgroundSize: 'cover', // Ensure the image covers the area
        backgroundPosition: 'center', // Center the image within the box
      }}
    />
        </Grid>

        {/* Right Column: Text and Navigation */}
        <Grid item xs={12} sm={6} md={6}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
  <Typography variant="h5" sx={{ fontFamily: 'Caveat', color: 'rgb(214, 113, 20)' }}>
    Food Articles
  </Typography>
  
 
<Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
      <Box
        sx={{
          width: '30.8px',
          height: '3.14px',
          backgroundColor: 'rgb(141, 151, 187)',
          borderRadius: '20px',
          cursor: 'pointer',
        }}
        onClick={handleClick}
      />
      <Box
        sx={{
          width: '15.4px',
          height: '3.14px',
          backgroundColor: 'rgb(141, 151, 187)',
          borderRadius: '20px',
          cursor: 'pointer',
        }}
        onClick={handleClick}
      />
      <Box
        sx={{
          width: '23.1px',
          height: '3.14px',
          backgroundColor: 'rgb(141, 151, 187)',
          borderRadius: '20px',
          cursor: 'pointer',
        }}
        onClick={handleClick}
      />

      {/* Menu with options */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            zIndex: 1200, // Adjust the zIndex to bring the menu above other components
          },
        }}
      >
        <MenuItem onClick={handleBlogCreate}>Create a Blogpost</MenuItem>
        <MenuItem onClick={handleClose}>My Dashboard</MenuItem>
        <MenuItem onClick={handleBlogSignup}>Guest Blogger - Signup</MenuItem>
        <MenuItem onClick={handleHome}>Msarii Home</MenuItem>
      </Menu>
    </Box>
    </Box>
          <Box sx={{ ml: 2,mt:4 }}>
            {/* Breadcrumbs Navigation */}
            <Breadcrumbs
              separator={<NavigateNext fontSize="small" />}
              aria-label="breadcrumb"
              sx={{ mb: 2 }}
            >
              <Link color="inherit" href="/blogs">
                All blogs
              </Link>
              <Link color="inherit" href="/blogs/food">
                Food blogs
              </Link>
              <Link color="inherit" href="/blogs/food/healthy">
                Healthy food
              </Link>
              <Typography variant="h5" sx={{ fontFamily: 'Caveat', color: 'rgb(214, 113, 20)' ,  fontStyle: 'italic'}}>
              More Than a Plate, It's a Choice
            </Typography>
            </Breadcrumbs>

            {/* Heading and Decoration */}
            



            {/* Main Text */}
            <Typography variant="h6" sx={{ fontFamily: 'Calibri', fontWeight: 'bold', color: 'black' }}>
            More Than a Plate, It's a Choice What if eating healthy was seen as an act of self-respect rather than self-sacrifice?            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Calibri', lineHeight: '24px', color: 'rgba(0, 0, 0, 0.8)' ,marginTop:'10px'}}>
              There’s an old saying: “You are what you eat.” If you’re imagining yourself as a walking sandwich right now, pause. The truth is, our relationship with food goes beyond just nourishment. It’s cultural, emotional, and, let’s be honest, sometimes complicated. For many of us, “healthy food” sounds like a buzzkill. It conjures images of bland salads, flavorless quinoa, and cardboard-like energy bars. But here’s the twist: healthy food isn’t boring—our perception of it is.
            </Typography>

            {/* Image Row */}
            <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
            <Box sx={{ width: '32%', height: '200px', borderRadius: '5px', overflow: 'hidden' }}>
        <img
          src={Blog1}
          alt="Blog 1"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>

      {/* Second Image */}
      <Box sx={{ width: '32%', height: '200px', borderRadius: '5px', overflow: 'hidden' }}>
        <img
          src={Blog2}
          alt="Blog 2"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>

      {/* Third Image */}
      <Box sx={{ width: '32%', height: '200px', borderRadius: '5px', overflow: 'hidden' }}>
        <img
          src={Blog3}
          alt="Blog 3"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
            </Box>

            {/* More Text */}
            <Typography variant="body2" sx={{ fontFamily: 'Calibri', lineHeight: '24px', color: 'rgba(0, 0, 0, 0.8)', mt: 2 }}>
              The Myths on Your Plate<br />
              Let’s start with some food myths we’ve all bought into:<br />
              Healthy food is expensive. (But medical bills are pricier.)<br />
              Cooking takes too much time. (But we scroll Instagram for an hour without blinking.)<br />
              Healthy means giving up all joy. (Last time I checked, mangoes, spices, and olive oil weren’t joyless.)<br />
              <br />
              The truth? Healthy eating doesn’t require turning your life upside down. It’s about small, mindful choices. Real food—whole grains, fresh fruits, hearty vegetables, and lean proteins—nourishes not just the body but the mind. Unlike processed junk, real food doesn’t leave you hungry in two hours or make you feel like you need a nap at 3 PM.
            </Typography>

            {/* Blogger Profile */}
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 4 }}>
              {/* <Box
                sx={{
                  width: '31px',
                  height: '31px',
                  backgroundImage: 'url(https://via.placeholder.com/31x31)',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                }}
              /> */}
               <Box sx={{ width: '31px',
                  height: '31px',backgroundSize: 'cover',
                  borderRadius: '50%', }}>
        <img
          src={Veni}
          alt="Blog 3"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
              <Typography variant="body2" sx={{ fontFamily: 'Calibri', fontWeight: 'bold', color: 'rgb(99, 99, 181)', ml: 2 }}>
                Yeddo | Yeddo Blogs | 17 Dec 2024
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </div>
    </Layout>
  );
};

export default Blogs;
