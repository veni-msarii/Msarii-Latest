import React from "react";
import { TextField, Button, Grid, Box, Typography } from "@mui/material";
import "../styles/SignUpPage.css";
import Layout from "../components/Layout/Layout";
import Blog from "../images/blog.png"; 

const BlogSignUp = () => {
  return (
    <Layout>
      <div style={{ backgroundColor: "", height: "auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            padding: " 30px 15px", // Added padding around the entire Box for spacing
          }}
        >
          <Grid container sx={{ width: "60%", backgroundColor: "white", boxShadow: 12, borderRadius: 3, padding: 3 }}>
            {/* Left Column: Form Fields */}
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  gutterBottom
                  align="center"
                  sx={{
                    fontFamily: "Calibri",
                    fontSize: "30px",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    marginBottom: 1, // Adjusted margin for more space between the title and text
                  }}
                >
                  Write With Us
                </Typography>
                <Typography
                  variant="h4"
                  gutterBottom
                  align="center"
                  sx={{
                    fontFamily: "Calibri",
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "rgb(0.51, 0.43, 1)", // Custom color for "Become a"
                    textDecoration: "underline",
                    marginTop: 0, // Reduced space above this line
                  }}
                >
                  Become a <span style={{ color: "rgb(85, 89, 255)", textDecoration: "underline" }}>Guest Blogger</span>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  align="center"
                  sx={{
                    fontFamily: "Calibri",
                    fontSize: "18px",
                    lineHeight: "25px",
                    color: "rgb(85, 85, 85)",
                    marginBottom: 3, // Added margin below the text for spacing
                  }}
                >
                  Have insights to share? Stories to tell? Join our blog as a guest writer and share your thoughts with our audience. Fill out the form below to get started!
                </Typography>
              </Grid>

              {/* Form Fields */}
              <Grid item xs={12} md={6}>
                <form>
                  <Typography variant="body1" sx={{ fontFamily: "Calibri", marginBottom: 1 }}>What’s Your Name?</Typography>
                  <TextField
                    placeholder="Enter your name.."
                    variant="filled"
                    fullWidth
                    required
                    sx={{
                      marginBottom: 2,
                      backgroundColor: "rgb(238, 238, 238)",
                      borderRadius: "5px",
                      border: "none",
                    }}
                  />
                  <Typography variant="body1" sx={{ fontFamily: "Calibri", marginBottom: 1 }}>Where Can We Email You?</Typography>
                  <TextField
                    placeholder="info@xyz.com"
                    variant="filled"
                    fullWidth
                    required
                    type="email"
                    sx={{
                      marginBottom: 2,
                      backgroundColor: "rgb(238, 238, 238)",
                      borderRadius: "5px",
                      border: "none",
                    }}
                  />
                  <Typography variant="body1" sx={{ fontFamily: "Calibri", marginBottom: 1 }}>Create your Username</Typography>
                  <TextField
                    placeholder="Enter your desired username"
                    variant="filled"
                    fullWidth
                    required
                    sx={{
                      marginBottom: 2,
                      backgroundColor: "rgb(238, 238, 238)",
                      borderRadius: "5px",
                      border: "none",
                    }}
                  />
                  <Typography variant="body1" sx={{ fontFamily: "Calibri", marginBottom: 1 }}>Create your password</Typography>
                  <TextField
                    placeholder="xxxxxxxxxx"
                    variant="filled"
                    fullWidth
                    required
                    type="password"
                    sx={{
                      marginBottom: 2,
                      backgroundColor: "rgb(238, 238, 238)",
                      borderRadius: "5px",
                      border: "none",
                    }}
                  />
                </form>
              </Grid>

              {/* Second Column: Remaining Fields */}
              <Grid item xs={12} md={6}>
                <form>
                  <Typography variant="body1" sx={{ fontFamily: "Calibri", marginBottom: 1 }}>Pen Name (Optional)</Typography>
                  <TextField
                    placeholder="Enter your name.."
                    variant="filled"
                    fullWidth
                    required
                    sx={{
                      marginBottom: 2,
                      backgroundColor: "rgb(238, 238, 238)",
                      borderRadius: "5px",
                      border: "none",
                    }}
                  />
                  <Typography variant="body1" sx={{ fontFamily: "Calibri", marginBottom: 1 }}>What’s Your Mobile No?</Typography>
                  <TextField
                    placeholder="+91 - 98596 58000"
                    variant="filled"
                    fullWidth
                    required
                    sx={{
                      marginBottom: 2,
                      backgroundColor: "rgb(238, 238, 238)",
                      borderRadius: "5px",
                      border: "none",
                    }}
                  />
                  <Typography variant="body1" sx={{ fontFamily: "Calibri", marginBottom: 1 }}>Give a name to your blog collection</Typography>
                  <TextField
                    placeholder="Enter your blog name.."
                    variant="filled"
                    fullWidth
                    required
                    sx={{
                      marginBottom: 2,
                      backgroundColor: "rgb(238, 238, 238)",
                      borderRadius: "5px",
                      border: "none",
                    }}
                  />
                  <Typography variant="body1" sx={{ fontFamily: "Calibri", marginBottom: 1 }}>Confirm your password</Typography>
                  <TextField
                    placeholder="Re-enter your password"
                    variant="filled"
                    fullWidth
                    required
                    type="password"
                    sx={{
                      marginBottom: 2,
                      backgroundColor: "rgb(238, 238, 238)",
                      borderRadius: "5px",
                      border: "none",
                    }}
                  />
                </form>
              </Grid>

              {/* Centering Button between Two Columns */}
              <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", marginTop: 0, marginBottom: 0}}>
                <Button
                  variant="contained"
                  sx={{
                    fontFamily: "Calibri",
                    fontSize: "16px",
                    fontWeight: "bold",
                    backgroundColor: "white", // Initial background color
                    color: "rgb(85, 89, 255)", // Text color
                    padding: "10px 20px",
                    textTransform: "none",
                    width: "auto", // Removes full width
                    '&:hover': {
                      backgroundColor: "rgb(85, 89, 255)", // Background color on hover
                      color: "white", // Text color on hover
                    },
                  }}
                  type="submit"
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </Grid>

          {/* Right Column: Background Image */}
          <Box
  sx={{
    width: "35%",
    display: { xs: "none", md: "block" },
    borderRadius: "25px",
  }}
>
  <img
    src={Blog}
    alt="Signup"
    style={{
      width: "100%",
      height: "auto",
      borderRadius: "25px",  // Optional: If you want the image to have rounded corners
    }}
  />        </Box>

        </Box>
      </div>
    </Layout>
  );
};

export default BlogSignUp;
