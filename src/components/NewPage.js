import React from "react";
import SearchBar from "./HomePage/Homepage";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const NewPage = () => {
  return (
    <div style={{ height: "98vh", padding: "0", margin: "0" }}>
      <div
        style={{
          height: "10vh",
          background: "black",
          position: "fixed",
          padding: "0",
          margin: "0",
          top: "0",
          left: "0",
          right: "0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            textAlign: "center",
            // background: "#007acc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://st4.depositphotos.com/18664664/22485/v/450/depositphotos_224850436-stock-illustration-recipe-icon-trendy-recipe-logo.jpg"
            alt="Logo"
            style={{
              maxWidth: "100px",
              margin: "0",
              padding: "0",
              background: "transparent",
              height: "5vh",
            }}
          />
          <h1 style={{ color: "white", margin: "0", padding: "0",fontSize:"1.5rem" }}>
            RECIPE FINDER
          </h1>
        </div>
        <SearchBar />
      </div>
      <div style={{ height: "100%" ,width:"100%"}}>
        <Card sx={{ height: "100%" }} >
          <CardMedia
            component="img"
            src="https://www.cypressgreen.in/blog/wp-content/uploads/2021/03/food-1024x683.jpg"
            alt="Food"
            style={{width:"100%" }}
          />
        </Card>

        {/* <div style={{ flex: 1, justifyContent: "center" }}>
          <h2>ENTER THE RECIPE YOU WANT TO SEARCH</h2>
        </div> */}
      </div>
    </div>
  );
};

export default NewPage;
