import React, { useState } from "react";
import YearImages from "../../images/year.png"
const YearContent = () => {
  const [selectedYear, setSelectedYear] = useState("2024");

  // Year Data for right section
  const yearData = {
    "2021": {
      imageUrl: YearImages,
      title: "Built Camel Nation - Minted 100 NFTs",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour. There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour ",
    },
    "2022": {
      imageUrl: YearImages,
      title: "Built Camel Nation - Minted 250+ NFTs",
      description:
        "Lorem Ipsum for 2022. There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form.",
    },
    "2023": {
      imageUrl: YearImages,
      title: "Built Camel Nation - Minted 500+ NFTs",
      description:
        "Lorem Ipsum for 2023. The majority have suffered in some form, by injected humour, or randomised words.",
    },
    "2024": {
      imageUrl:YearImages,
      title: "Built Camel Nation - Minted 1000+ NFTs",
      description:
        "Lorem Ipsum for 2024. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    "2025": {
      imageUrl:YearImages,
      title: "Built Camel Nation - Minted 1500+ NFTs",
      description:
        "Lorem Ipsum for 2025. The majority have suffered in some form, by injected humour or randomised words.",
    },
  };

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  return (
    <div className="container">
      {/* Left Section */}
      <div className="left-section">
        {["2021", "2022", "2023", "2024", "2025"].map((year) => (
          <div
            key={year}
            className={`year-item ${selectedYear === year ? "selected" : ""}`}
            onClick={() => handleYearClick(year)}
          >
            <YearRectangle year={year} isSelected={selectedYear === year} />
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className="right-section">
        <RightRectangle
          imageUrl={yearData[selectedYear].imageUrl}
          title={yearData[selectedYear].title}
          description={yearData[selectedYear].description}
        />
      </div>
    </div>
  );
};

// Year Rectangle Component for Left Section
const YearRectangle = ({ year, isSelected }) => {
  return (
    <div
      style={{
        width: "132px",
        height: "62.78px",
        backgroundColor: isSelected ? "rgb(0.36, 0.34, 0.44)" : "transparent",
        borderRadius: "9px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: isSelected ? "#fff" : "rgb(0.59, 0.59, 0.60)",
        fontSize: "24px",
        cursor: "pointer",
      }}
    >
      {year}
    </div>
  );
};

// Main Rectangle Component for Right Section
const RightRectangle = ({ imageUrl, title, description }) => {
  return (
    <div>
      <div
        style={{
          width: "90%",
          height: "505px",
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "14px",
        }}
      ></div>
        <div
  style={{
    width: "90%",
    display: "flex", // Enables Flexbox
    flexDirection: "column", // Ensures the content stacks vertically
    alignItems: "center", // Centers items horizontally
    textAlign: "center", // Ensures text is centered
  }}
>
      <Text content={title} isTitle />
      <Text content={description} />
    
      <button
        style={{
          width: "210px",
          height: "50px",
          backgroundColor: "#59588D",
          borderRadius: "7px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
          color: "white",
          border: "none",
          cursor: "pointer",
          alignSelf:'center',
          marginTop:"10px"

        }}
      >
        Browse Here
      </button>
      </div>
    </div>
  );
};

// Text Component for displaying content
const Text = ({ content, isTitle }) => {
  return (
    <div
      style={{
        fontFamily: "Calibri",
        fontSize: isTitle ? "40px" : "24px",
        fontWeight: isTitle ? "bold" : "normal",
        lineHeight: isTitle ? "62px" : "35px",
        color: "rgb(0.07, 0.04, 0.22)",
        marginTop: isTitle ? "20px" : "15px",
      }}
    >
      {content}
    </div>
  );
};

export default YearContent;
