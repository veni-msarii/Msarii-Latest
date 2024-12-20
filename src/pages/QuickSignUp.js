import React from "react";
import { TextField, Button, Checkbox, FormControlLabel, Typography, Grid, Box } from "@mui/material";
import "../styles/SignUpPage.css";
import Layout from "../components/Layout/Layout";
import SignupImg from "../images/signup.png"; 

const QuickSignUp = () => {
  return (
    <Layout>
      <div style={{ backgroundColor: "", height: "auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
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
                                  color: "rgb(85, 89, 255)",
                                }}
                              >
                                Quick Sign Up
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
                  }}
                >
                  This is where learning, sharing, and growing begins. Ready to dive in?{" "}
                  <br />
                  Sign up and let’s get started on your goals.
                </Typography>
              </Grid>

              {/* First 5 fields */}
              <Grid item xs={12} md={6}>
                <form>
                  <Typography variant="body1" sx={{ fontFamily: "Calibri", marginBottom: 1 }}>First Name</Typography>
                  <TextField
                    placeholder="Enter your first name"
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
                  <Typography variant="body1" sx={{ fontFamily: "Calibri", marginBottom: 1 }}>Email ID</Typography>
                  <TextField
                    placeholder="Enter your email ID"
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
                    placeholder="Enter your password"
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

              {/* Second Column: Remaining Fields */}
              <Grid item xs={12} md={6}>
                <form>
                  <Typography variant="body1" sx={{ fontFamily: "Calibri", marginBottom: 1 }}>Last Name</Typography>
                  <TextField
                    placeholder="Enter your last name"
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
                  <Typography variant="body1" sx={{ fontFamily: "Calibri", marginBottom: 1 }}>Mobile Number</Typography>
                  <TextField
                    placeholder="Enter your mobile number"
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

                  {/* Checkboxes for Primary Reason */}
                  <Typography variant="body1" sx={{ fontFamily: "Calibri", marginBottom: 1 }}>Primary Reason for Signing Up</Typography>
                  <FormControlLabel control={<Checkbox />} label="To Learn (Student)" sx={{ marginBottom: 1 }} />
                  <FormControlLabel control={<Checkbox />} label="To Teach (Instructor/Teacher)" sx={{ marginBottom: 1 }} />
                  <FormControlLabel control={<Checkbox />} label="To Contribute to Blog Community" sx={{ marginBottom: 1 }} />
                  <FormControlLabel control={<Checkbox />} label="To Partner in Affiliate Programs" sx={{ marginBottom: 1 }} />
                  <FormControlLabel control={<Checkbox />} label="To Enroll as Organization & Teach Students" sx={{ marginBottom: 2 }} />

                  {/* Sign Up Button */}
                  <Button
                    variant="contained"
                    sx={{
                      fontFamily: "Calibri",
                      fontSize: "16px",
                      fontWeight: "bold",
                      backgroundColor: "rgb(85, 89, 255)",
                      color: "white",
                      padding: "10px 0",
                      textTransform: "none",
                    }}
                    fullWidth
                    type="submit"
                  >
                    Sign Up
                  </Button>
                </form>
              </Grid>
            </Grid>
          </Grid>

          {/* Right Column: Background Image */}
          {/* <Box
            sx={{
              width: "35%",
              backgroundImage: `url(${SignupImg})`,  // Use the imported image here
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "25px",
              display: { xs: "none", md: "block" },
            }}
          />
        </Box> */}
        <Box
  sx={{
    width: "35%",
    display: { xs: "none", md: "block" },
    borderRadius: "25px",
  }}
>
  <img
    src={SignupImg}
    alt="Signup"
    style={{
      width: "100%",
      height: "auto",
      borderRadius: "25px",  // Optional: If you want the image to have rounded corners
    }}
  />
</Box>
</Box>

      </div>
    </Layout>
  );
};

export default QuickSignUp;
