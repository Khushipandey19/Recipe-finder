import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
import SearchBar from '../HomePage/Homepage.js';
import './recipe.css'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const recipeList = useSelector((state) => state.recipe);
  console.log(recipeList);

  return (
    <div >
     < SearchBar/>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
          // margin: "1rem 0",
          boxShadow: "10px",
    
        }}
      >
        {recipeList?.length ? (
          recipeList.map((recipe, index) => (
            <Card key={index} sx={{ maxWidth: "17%", minWidth: "17%" }}>
              <div style={{ maxHeight: "40vh" }}>
                <CardHeader
                  title={recipe.recipe.label}
                  sx={{ maxHeight: "5vh", margin: "auto" }}
                  subheader={
                    Array.isArray(recipe.recipe.dishType) &&
                    recipe.recipe.dishType.length > 0
                      ? recipe.recipe.dishType[0].charAt(0).toUpperCase() +
                        recipe.recipe.dishType[0].slice(1)
                      : ""
                  }
                />

                <CardMedia
                  component="img"
                  height="194"
                  image={recipe.recipe.image}
                  alt="Recipe Image"
                  sx={{ maxHeight: "20vh", margin: "auto", width: "70%" }}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive recipe is...
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                      {/* Add recipe-specific content here */}
                    </Typography>
                    {/* Continue adding recipe-specific content */}
                  </CardContent>
                </Collapse>
              </div>
            </Card>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
}
