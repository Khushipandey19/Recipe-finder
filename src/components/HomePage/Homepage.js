import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Axios from "axios";
import { dataSliceActions } from "../../redux/slice/strategySlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../Recipe/recipe.css'

const Homepage = () => {
  const [searchString, setSearchString] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const APP_ID = "b362115c";
  const APP_KEY = "1ed7f3fb19f027203747a1af88e447bc";
  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(); // Trigger the search when Enter key is pressed
    }
  };

  const handleSearch = () => {
    const apiUrl = `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    Axios.get(apiUrl)
      .then((response) => {
        dispatch(dataSliceActions.setData(response.data.hits));
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log("error in fetching");
      });
  };

  return (
    <div>
      <div className="search-container">
        <TextField
          id="standard-basic"
          label="Enter your search query"
          variant="filled"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          onKeyDown={handleEnterPress} // Handle Enter key press
          sx={{ width: "20vw", padding: "8px", color: "white" }}
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default Homepage;
