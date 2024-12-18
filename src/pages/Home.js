import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import BannerImage from "../images/msarii-website-1 1.png"; // Replace with your image path
import Gradesheet from "../images/gs.png"; 
import Checklist from "../images/checklist.png"; 
import Hotwash from "../images/hotwash.png"; 
import Library from "../images/library.png"; 
import Schedule from "../images/schedule.png";
import NoteImage from "../images/Notes 1.png";
import ChecklistImage from "../images/checklist_3 1.png";
import Technology from "../images/technology related 3d image.png";
import Technology1 from "../images/need good global warming related HD image. Must relevant to nature.png";
import Technology2 from "../images/Rectangle 38.png";
import Profile from "../images/Image (1).png";

// iimport NoteImage from "../images/Notes 1.png";
// import HotwashImage from "../images/Hotwash.png";
// import TestImage from "../images/Test.png";
// import LibraryImage from "../images/Library.png";
// import ScheduleImage from "../images/Schedule.png";
// import Checklist from "../images/checklist.png"; 


import "../styles/HomeStyles.css";

const Home = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [activeButton, setActiveButton] = useState("Gradesheet");

  // Toggle accordion items
  const toggleAccordion = (index) => {
    console.log("kjhgcvklkh",index)
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  const contentMap = {
    Gradesheet: {
      title: "Write on the go!",
      subHeading: "Simplify Your Note-Taking process with TOS Notes",
      content:
" Capture thoughts, organize ideas, and collaborate seamlessly with TOS Notes—your ultimate digital notebook designed for productivity and flexibility. Add visuals to your notes and annotate directly on images to emphasize key details or concepts. Sort your notes using custom tags, making retrieval faster and your workspace clutter-free.",      buttonText: "Know More",
      image: NoteImage,
    },
    Hotwash: {
      title: "Hotwash Section",
      subHeading: "Reflect and Learn with Hotwash",
      content:
" Capture thoughts, organize ideas, and collaborate seamlessly with TOS Notes—your ultimate digital notebook designed for productivity and flexibility. Add visuals to your notes and annotate directly on images to emphasize key details or concepts. Sort your notes using custom tags, making retrieval faster and your workspace clutter-free.",      buttonText: "Explore",
      image: NoteImage,
    },
    Notes: {
      title: "Notes Section",
      subHeading: "Your Personal Workspace",
      content:
" Capture thoughts, organize ideas, and collaborate seamlessly with TOS Notes—your ultimate digital notebook designed for productivity and flexibility. Add visuals to your notes and annotate directly on images to emphasize key details or concepts. Sort your notes using custom tags, making retrieval faster and your workspace clutter-free.",      buttonText: "Learn More",
      image: NoteImage,
    },
    Test: {
      title: "Test Section",
      subHeading: "Boost Your Productivity",
      content:
" Capture thoughts, organize ideas, and collaborate seamlessly with TOS Notes—your ultimate digital notebook designed for productivity and flexibility. Add visuals to your notes and annotate directly on images to emphasize key details or concepts. Sort your notes using custom tags, making retrieval faster and your workspace clutter-free.",      buttonText: "Try Now",
      image: NoteImage,
    },
    Checklist: {
      title: "Checklist Section",
      subHeading: "Stay On Track",
      content:
" Capture thoughts, organize ideas, and collaborate seamlessly with TOS Notes—your ultimate digital notebook designed for productivity and flexibility. Add visuals to your notes and annotate directly on images to emphasize key details or concepts. Sort your notes using custom tags, making retrieval faster and your workspace clutter-free.",      buttonText: "Start Using",
      image: NoteImage,
    },
    Library: {
      title: "Library Section",
      subHeading: "Your Knowledge Hub",
      content:
" Capture thoughts, organize ideas, and collaborate seamlessly with TOS Notes—your ultimate digital notebook designed for productivity and flexibility. Add visuals to your notes and annotate directly on images to emphasize key details or concepts. Sort your notes using custom tags, making retrieval faster and your workspace clutter-free.",      buttonText: "Discover",
      image:NoteImage,
    },
    Schedule: {
      title: "Schedule Section",
      subHeading: "Plan Your Days",
      content:
" Capture thoughts, organize ideas, and collaborate seamlessly with TOS Notes—your ultimate digital notebook designed for productivity and flexibility. Add visuals to your notes and annotate directly on images to emphasize key details or concepts. Sort your notes using custom tags, making retrieval faster and your workspace clutter-free.",      buttonText: "Get Started",
      image:NoteImage,
    },
  };
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const activeContent = contentMap[activeButton];
    const cardContent = [
        { title: "Gradesheet", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", image: Gradesheet },
        { title: "Checklist", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 2", image: Checklist },
        { title: "Hotwash", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 3", image: Hotwash },
        { title: "Library", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 4", image: Library },
        { title: "Schedule", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 5", image: Schedule },
        { title: "Gradesheet", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 6", image: Gradesheet },
        { title: "Hotwash", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 7", image: Hotwash },
        { title: "Library", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 8", image: Library },
        { title: "Checklist", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 9", image: Checklist },
      ];
      const blogData = [
        {
          category: "Technology",
          title: "The Impact of Technology on the Workplace: How Technology is Changing",
          author: "Tracey Wilson",
          date: "August 20, 2022",
          imageUrl: Technology,
          avatarUrl: Profile,
        },
        // Add more blog objects (total of 6)
        {
          category: "Innovation",
          title: " Future of AI:The Impact of Technology on the Workplace: How Technology is Changing",

          author: "John Doe",
          date: "July 15, 2022",
          imageUrl: Technology1,
          avatarUrl: Profile,
        },
        {
          category: "Science",
          title: " Exploring Space:The Impact of Technology on the Workplace: How Technology is Changing",

          author: "Jane Smith",
          date: "June 10, 2022",
          imageUrl: Technology2,
          avatarUrl: Profile,
        },
        {
          category: "Innovation",
          title: " Future of AI:The Impact of Technology on the Workplace: How Technology is Changing",
          author: "John Doe",
          date: "July 15, 2022",
          imageUrl: Technology1,
          avatarUrl: Profile,
        },
        {
          category: "Science",
          title: " Future of AI:The Impact of Technology on the Workplace: How Technology is Changing",
          author: "Jane Smith",
          date: "June 10, 2022",
          imageUrl: Technology2,
          avatarUrl: Profile,
        },
        {
          category: "Technology",
          title: "The Impact of Technology on the Workplace: How Technology is Changing ",
          author: "Tracey Wilson",
          date: "August 20, 2022",
          imageUrl: Technology,
          avatarUrl: Profile,
        },
        // Add 3 more entries...
      ];
  return (
    <Layout>
      <div className="home" style={{ backgroundColor: "#130939", height: "auto" }}>
        <div className="headerContainer">
          <div className="leftSideText">
            <h1 className="mainTitle">
              Best Learning <br />
              Education Platform <br />
              in The World
            </h1>
            <p className="subText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Audax negotium, dicerem impudens, nisi hoc institut <br /> translatum ad philosophos nostros esset.
            </p>
            <div className="buttonContainer">
              <Link to="/quote">
                <button className="getQuoteBtn">Get A Quote</button>
              </Link>
              <Link to="/free-trial">
                <button className="tryForFreeBtn">Try For Free</button>
              </Link>
            </div>
          </div>

          <div className="rightImage">
            <img src={BannerImage} alt="Banner" className="image" />
          </div>
        </div>
      </div>

      {/* New Heading and Subheading */}
      <div className="newTextSection">
        <h2 className="newHeading">Lorem ipsum dolor</h2>
        <p className="newSubHeading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Scrolling Cards Section */}
      <div className="scrollingCardsContainer">
          {/* Cards Wrapper for automatic scrolling */}
          <div className="cardsWrapper">
            {cardContent.map((card, index) => (
              <div key={index} className="card">
                <img src={card.image} alt={`Card ${index}`} className="cardImage" />
                <h3 className="cardTitle">{card.title}</h3>
                <p className="cardText">{card.text}</p>
              </div>
            ))}
            {/* Duplicated cards for seamless scrolling */}
            {cardContent.map((card, index) => (
              <div key={index + cardContent.length} className="card">
                <img src={card.image} alt={`Card ${index}`} className="cardImage" />
                <h3 className="cardTitle">{card.title}</h3>
                <p className="cardText">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="appContainer">
      <div className="splitLayout">
        {/* Left Side - Text and Heading */}
        <div className="leftTextSection">
          <h2 className="leftHeading">Lorem ipsum dolor</h2>
          <p className="leftSubheading">Lorem ipsum dolor sit amet, consectetur!</p>
          <p className="leftContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Lorem ipsum amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Right Side - Accordion Section */}
        <div className="rightAccordionSection">
          <div className="accordion">
            {[
              "What is the difference between a UI and UX Designer?",
              "Another Question?",
              "Why do we need design thinking?",
              "How to improve user experience?",
              "How to implement design best practices?",
            ].map((question, index) => (
              <div key={index} className="accordionItem">
                <button
                  className="accordionHeader"
                  onClick={() => toggleAccordion(index)}
                >
                  {question}
                </button>
                <div
                  className={`accordionContent ${
                    activeAccordion === index ? "show" : "hide"
                  }`}
                >
                  <p>
                  This is a custom description for the question "{question}". The content here explains in detail about the topic and provides useful insights. Feel free to modify this content with any relevant information you wish to display based on the question or topic asked.

                  </p>
                  <p>
                  This is a custom description for the question "{question}". 
                  </p>
                  <p>
                  This is a custom description for the question "{question}". The content here explains in detail about the topic and provides useful insights. 

                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons Row */}
      <div className="appContainer">
      {/* Button Row */}
      <div className="buttonRow">
        {Object.keys(contentMap).map((buttonName) => (
          <button
            key={buttonName}
            className={`customButton ${
              activeButton === buttonName ? "activeButton" : ""
            }`}
            onClick={() => handleButtonClick(buttonName)}
          >
            {buttonName}
          </button>
        ))}
      </div>

      {/* Split Layout */}
      <div className="splitLayout">
        {/* Left Section */}
        <div className="leftSection">
          <div
            className="imageRectangle"
           
          >
              <img
              src={activeContent.image}
              alt={`${activeContent} image`}
              className="rectangleImage"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="rightSection">
          <h1 className="title">{activeContent.title}</h1>
          <h2 className="subHeading">{activeContent.subHeading}</h2>
          <p className="content">{activeContent.content}</p>
          <button className="knowMoreButton">{activeContent.buttonText}</button>
        </div>
      </div>
    </div>
    </div>
    <div className="content-checklist">
      {/* Left Section with Text */}
      <div className="leftSections">
    <h1 className="mainTitles">Checklist now available on iOS</h1>
    <h2 className="subHeading">Quickly create, edit, or delete your to-dos!</h2>
    <p className="content">
      Stay on track with Day, Week, Month, or Year views, giving you the flexibility to focus on what matters. Access linked files directly within your checklist for easy reference. Prioritize tasks with filters like completed, pending, bookmarked, and more. Switch between portrait and landscape modes for a tailored viewing experience.
      <span className="highlight"> Simplify your todos and boost productivity—right from your iPhone and iPad!</span>
    </p>
  </div>

      {/* Right Section with Image */}
      <div className="rightSection">
        <img src={ChecklistImage} alt="Checklist Image" className="rightImages" />
      </div>
    </div>
    <div className="blog-section">
      <h2 className="section-heading">Recent Blogs</h2>
      <div className="card-grid">
        {blogData.map((blog, index) => (
          <div className="card-Blog" key={index}>
            <div className="card-Blog-image">
              <img src={blog.imageUrl} alt={blog.title} />
            </div>
            <div className="card-Blog-content">
              <div className="category-badge">{blog.category}</div>
              <h3 className="card-Blog-title">{blog.title}</h3>
              <div className="card-Blog-footer">
                <div className="author-info">
                  <img
                    src={blog.avatarUrl}
                    alt={blog.author}
                    className="author-avatar"
                  />
                  <span>{blog.author}</span>
                </div>
                <span className="blog-date">{blog.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default Home;
