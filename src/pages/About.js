import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import "../styles/AboutStyles.css";
import CircleImages from "../images/Group 37150.png";
import TeamGrid from "../components/common/TeamGrid";
import Aditya from "../images/aditya.png"; 
import Archana from "../images/archana.png"; 
import Anchit from "../images/anchit.png"; 
import Veni from "../images/veni.png"; 
import Nila from "../images/nila.png";
import Saranya from "../images/saranya.png";
import Jassem from "../images/jassem.png";
import Shiv from "../images/shiv.png";
import Instagram from "../images/instagram.png";
import Facebook from "../images/facebook.png";
import Twitter from "../images/twitter.png";
import YearContent from "../components/common/YearContent";
import FormSection from "../components/common/FormSection";



const About = () => {
  const teamMembers = [
    {
      id: 1,
      imageURL:Aditya ,
      name: "Aditya Thete",
      role: "Software Tester",
      description:
        "A meticulous software tester ensuring flawless performance, seamless functionality, and user experience",
      skills: ["A4", "Testing"],
      socialLinks: {
        facebook: Facebook,
        instagram: Instagram,
        twitter: Twitter,
      },
    },
    {
      id: 2,
      imageURL: Anchit,
      name: "Anchit Choudhary",
      role: "2D Artist",
      description:
        "Transforms ideas into stunning visuals with expertise in 2D art, enhancing creativity and engagement",
      skills: ["A4", "Ui/Ux"],
      socialLinks: {
        facebook: Facebook,
        instagram: Instagram,
        twitter: Twitter,
      },
    },
    {
      id: 3,
      imageURL: Archana,
      name: "Archana Nair",
      role: "PHP Director",
      description:
        "Leads backend systems with PHP expertise, ensuring scalable, efficient, and reliable digital solutions for success",
      skills: ["A4", "Backend-Player"],
      socialLinks: {
        facebook: Facebook,
        instagram: Instagram,
        twitter: Twitter,
      },
    },
    {
      id: 4,
      imageURL: Jassem,
      name: "Jassem Aldarmaki",
      role: "CEO",
      description:
        "Visionary leader driving growth, innovation, and success with strategic direction and inspiring leadership",
      skills: ["A1", "Tailwind"],
      socialLinks: {
        facebook: Facebook,
        instagram: Instagram,
        twitter: Twitter,
      },
    },
    {
      id: 5,
      imageURL: Saranya,
      name: "Saranya Varthini",
      role: "VP",
      description:
        "Crafts strategies and fosters innovation to keep the team aligned, motivated, and achieving remarkable outcomes",
      skills: ["A1", "Scrum"],
      socialLinks: {
        facebook: Facebook,
        instagram: Instagram,
        twitter: Twitter,
      },
    },
    {
      id: 6,
      imageURL: Shiv,
      name: "Shivsai Anantwar",
      role: "DevOps Trainer",
      description:
        "Delivers DevOps training and solutions that streamline workflows, ensuring efficiency, and continuous improvement",
      skills: ["A4", "Scrum"],
      socialLinks: {
        facebook: Facebook,
        instagram: Instagram,
        twitter: Twitter,
      },
    },
    {
      id: 7,
      imageURL: Veni,
      name: "Thriveni Reddy",
      role: "Frontend Developer",
      description:
        "Builds interactive, user-friendly frontend applications that turn complex ideas into intuitive digital experiences",
      skills: ["A4", "Scrum"],
      socialLinks: {
        facebook: Facebook,
        instagram: Instagram,
        twitter: Twitter,
      },
    },
    {
      id: 8,
      imageURL: Nila,
      name: "Udhayanila Mohanraj",
      role: "iOS Developer",
      description:
        "Develops seamless, high-performing iOS applications tailored for user satisfaction, and smooth experiences",
      skills: ["A4", "Scrum"],
      socialLinks: {
        facebook: Facebook,
        instagram: Instagram,
        twitter: Twitter,
      },
    },
  ];
  
  return (
    <Layout>
      <Box  sx={{
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          backgroundColor: "#E1E5EB", // Background color applied here
        }} >
           <Typography
  variant="h1"
  sx={{
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    fontSize: "64px",  // Heading size
    lineHeight: "88px", // Line height for spacing
    color: "rgb(18, 10, 56)", // Custom color
  }}
>
  <span
    style={{
      borderBottom: "4px solid rgb(18, 10, 56)", // Underline only for the text
      paddingBottom: "12px", // Space between text and underline
    }}
  >
    About Us
  </span>
</Typography>

        {/* Founded Section */}
        <Box sx={{ display: "flex", alignItems: "flex-start", width: "100%" }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "32px",
              color: "rgb(38, 38, 38)",
              width: "30%",  // Heading takes up 30% of the row
            }}
          >
            Founded
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: "24px",
              lineHeight: "32px",
              color: "rgb(63, 63, 63)",
              paddingLeft: "20px", // Gap between heading and description
              width: "70%", // Description takes up the remaining space
              wordBreak: "break-word", // Ensure long descriptions wrap
            }}
          >
            2021
          </Typography>
        </Box>

        {/* Industry Section */}
        <Box sx={{ display: "flex", alignItems: "flex-start", width: "100%" }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "32px",
              color: "rgb(38, 38, 38)",
              width: "30%", // Heading takes up 30% of the row
            }}
          >
            Industry
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: "24px",
              lineHeight: "32px",
              color: "rgb(63, 63, 63)",
              paddingLeft: "20px", // Gap between heading and description
              width: "70%", // Description takes up the remaining space
              wordBreak: "break-word", // Ensure long descriptions wrap
            }}
          >
            Ed-Tech
          </Typography>
        </Box>

        {/* About Section */}
        <Box sx={{ display: "flex", alignItems: "flex-start", width: "100%" }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "32px",
              color: "rgb(38, 38, 38)",
              width: "30%", // Heading takes up 30% of the row
            }}
          >
            About
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: "24px",
              lineHeight: "32px",
              color: "rgb(63, 63, 63)",
              paddingLeft: "20px", // Gap between heading and description
              width: "70%", // Description takes up the remaining space
              wordBreak: "break-word", // Ensure long descriptions wrap
            }}
          >
            Experience in working with and assisting a wide range of clients from international corporations to small/medium-sized businesses, from large corporate debt providers to mid-market private equity investors.
          </Typography>
        </Box>

        {/* Product Section */}
        <Box sx={{ display: "flex", alignItems: "flex-start", width: "100%" }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "32px",
              color: "rgb(38, 38, 38)",
              width: "30%", // Heading takes up 30% of the row
            }}
          >
            Product
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: "24px",
              lineHeight: "32px",
              color: "rgb(63, 63, 63)",
              paddingLeft: "20px", // Gap between heading and description
              width: "70%", // Description takes up the remaining space
              wordBreak: "break-word", // Ensure long descriptions wrap
            }}
          >
            TOS - Training Operations System
          </Typography>
        </Box>

        {/* Other Services Section */}
        <Box sx={{ display: "flex", alignItems: "flex-start", width: "100%" }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "32px",
              color: "rgb(38, 38, 38)",
              width: "30%", // Heading takes up 30% of the row
            }}
          >
            Other Services
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: "24px",
              lineHeight: "32px",
              color: "rgb(63, 63, 63)",
              paddingLeft: "20px", // Gap between heading and description
              width: "70%", // Description takes up the remaining space
              wordBreak: "break-word", // Ensure long descriptions wrap
            }}
          >
            E-learning Platform
          </Typography>
        </Box>

        {/* Applications Section */}
        <Box sx={{ display: "flex", alignItems: "flex-start", width: "100%" }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "32px",
              color: "rgb(38, 38, 38)",
              width: "30%", // Heading takes up 30% of the row
            }}
          >
            Applications
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: "24px",
              lineHeight: "32px",
              color: "rgb(63, 63, 63)",
              paddingLeft: "20px", // Gap between heading and description
              width: "70%", // Description takes up the remaining space
              wordBreak: "break-word", // Ensure long descriptions wrap
            }}
          >
            Website Applications & iOS
          </Typography>
        </Box>
        <div className="about-page">
  <div className="sections">
    {/* First Circle Section */}
    <div className="circle-container">
      <div className="circle">
        <span className="circle-number">4+</span>
      </div>
      <p className="description">Years <br /> in Business</p>
    </div>

    {/* Spacer between the two sections */}
    <div className="spacer" />

    {/* Second Circle Section */}
    <div className="circle-container">
      <div className="circle">
        <span className="circle-number">7+</span>
      </div>
      <p className="description">Ed-Tech <br /> Applications</p>
    </div>
    
    {/* Spacer between the two sections */}
    <div className="spacer" />
    
    {/* Third Circle Section */}
    <div className="circle-container">
      <div className="circle">
        <img className="circle-image" src={CircleImages} alt="Circle Image" />
      </div>
      <p className="description">99% Happy Customers</p>
    </div>
  </div>
</div>

      
      </Box>
      <div className="team-section">
  <div className="">
    <h2 className="section-title">OUR TEAM</h2>
    <h1 className="main-title">Meet the Path Makers</h1>
    <p class="team-description">
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour.
  </p>
  </div>
</div>
<Box sx={{
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          backgroundColor: "#E1E5EB", // Background color applied here
        }} >
<TeamGrid teamMembers={teamMembers} />
<section className="history-section">
      <h2 className="history-title">OUR HISTORY</h2>
      <h1 className="history-subtitle">The Story of Msarii</h1>
      <p className="history-description">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour. 
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour.
        There are many variations.
      </p>
    </section>
    <YearContent/>
</Box>
<FormSection/>

    </Layout>
  );
};

export default About;
