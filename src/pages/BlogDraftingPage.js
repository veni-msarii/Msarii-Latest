import React from "react";
import { Box, Button, Paper, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Layout from "../components/Layout/Layout";

const BlogDraftingPage = () => {
  const toolbarOptions = [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    ["link", "image", "video"],
    ["clean"],
    
  ];

  return (
    <Layout>
          <div style={{ backgroundColor: "", height: "auto" }}>
    <Box sx={{ padding: "20px",marginTop:"15px",          marginBottom: "20px",
 }}>
      {/* Top Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Button
          variant="text"
          sx={{
            fontWeight: "bold",
            fontSize: "16px",
            color: "rgba(0, 0, 0, 0.8)",
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Box
            sx={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              backgroundColor: "white",
              display: "flex",
              border:" 1px solid #ddd",

              alignItems: "center",
              justifyContent: "center",
            }}
          >
           <span style={{fontWeight: "bold", 
    fontSize: "14px"}}> ←</span>
          </Box>
          Go back to Dashboard
        </Button>
        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <Button
            variant="text"
            sx={{
              fontWeight: "bold",
              fontSize: "16px",
              color: "black",
              textTransform: "none",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              fontFamily: "Calibri, sans-serif",
              padding: "8px 16px",

              backgroundColor:"#E0E0E1"
            }}
          >
            Preview
          </Button>
          <Button
            variant="contained"
            sx={{
              fontWeight: "bold",
              fontSize: "16px",
              textTransform: "none",
              backgroundColor: "#59588D",
              color: "white",
              padding: "8px 16px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              fontFamily: "Calibri, sans-serif",
            }}
          >
            Continue
          </Button>
        </Box>
      </Box>

      {/* Main Content Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {/* Left Column: Blog Title */}
        <Paper
          sx={{
            flex: 1,
            padding: "10px",
            backgroundColor: "#f0f0f0",
            borderRadius: "8px",
          }}
        >
          <TextField
            placeholder="Add blog title here"
            variant="outlined"
            fullWidth
            InputProps={{
              style: {
                fontSize: "24px",
                fontWeight: "bold",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px", // Rounded corners
                "& fieldset": {
                  border: "none", // No border
                },
              },
            }}
          />
        </Paper>

        {/* Right Column: Buttons */}
        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            {[
              "Custom Excerpt",
              "Pick Blog Author",
              "Customize Slug",
              "Add Categories",
              "Add Tags",
              "Set Featured Image",
            ].map((text, index) => (
              <Button
                key={index}
                variant="outlined"
                sx={{
                  fontSize: "14px",
                  textTransform: "none",
                  border: "none",
                  backgroundColor: "#F1F1F1",
                  color: "#333",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  fontFamily: "Calibri, sans-serif",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#E1E1E1",
                  },
                }}
              >
                <AddIcon sx={{ marginRight: "8px" }} /> {text}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Rich Text Editor */}
      <Box
  sx={{
    border: "none",
    borderRadius: "8px",
    padding: "10px",
    minHeight: "500px", // Minimum height for the container
    minWidth: "600px",  // Minimum width for the container
    "& .ql-container": {
      minHeight: "450px", // Minimum height for the Quill editor's content area
    },
  }}
>
  <ReactQuill theme="snow" modules={{ toolbar: toolbarOptions }} />
</Box>

    </Box>
    </div>
    </Layout>
  );
};

export default BlogDraftingPage;
