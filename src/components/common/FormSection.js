import React from "react";

const FormSection = () => {
  const styles = {
    containers: {
      maxWidth: "1440px",
      padding: "20px",
      backgroundColor: "#FFFFFF",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "20px", // Reduced top margin for a more compact design
      marginBottom: "30px", // Added bottom margin for space after the section

    },
    headerText: {
      fontFamily: "Inter, sans-serif",
      fontWeight: "600",
      fontSize: "48px", // Reduced font size for more compactness
      lineHeight: "64px",
      color: "rgba(18, 10, 56, 1)",
      marginBottom: "8px", // Reduced space below header
      
    },
    subHeaderText: {
      fontFamily: "Inter, sans-serif",
      fontSize: "20px", // Reduced font size for subheading
      lineHeight: "28px",
      color: "rgba(92, 94, 97, 1)",
      marginBottom: "24px", // Reduced margin for more compact layout
    },
    inputContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "16px", // Reduced space between inputs
      width: "500px",
    },
    inputBox: {
      width: "100%",
      height: "40px", // Reduced height for inputs
      border: "none",
      borderBottom: "1px solid rgba(92, 94, 97, 1)", // Only bottom border
      padding: "8px 0",
      fontFamily: "Inter, sans-serif",
      fontSize: "14px", // Reduced font size for inputs
      lineHeight: "20px",
      color: "rgba(92, 94, 97, 1)",
    },
    button: {
      width: "520px",
      height: "48px", // Reduced height of the button
      backgroundColor: "rgba(90, 87, 140, 1)",
      borderRadius: "8px",
      color: "white",
      fontFamily: "Inter, sans-serif",
      fontWeight: "600",
      fontSize: "14px", // Reduced font size for the button
      lineHeight: "20px",
      textAlign: "center",
      cursor: "pointer",
      marginTop: "32px", // Reduced space above button
      border: "none",
    },
  };

  return (
    <div style={styles.containers}>
      {/* Header Section */}
      <div>
        <h1 style={styles.headerText}>Got an idea?</h1>
        <p style={styles.subHeaderText}>
          We’d love to hear from you. Please fill out this form.
        </p>
      </div>

      {/* Form Section */}
      <div style={styles.inputContainer}>
        <div>
          <input type="text" placeholder="Name" style={styles.inputBox} />
        </div>
        <div>
          <input type="email" placeholder="Company Email" style={styles.inputBox} />
        </div>
        <div>
          <input type="tel" placeholder="Phone Number" style={styles.inputBox} />
        </div>
        <div>
          <input type="text" placeholder="Title/Position" style={styles.inputBox} />
        </div>
        <div>
          <input type="text" placeholder="Subject" style={styles.inputBox} />
        </div>
      </div>

      {/* Submit Button */}
      <button style={styles.button}>Submit</button>
    </div>
  );
};

export default FormSection;
