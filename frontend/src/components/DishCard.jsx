import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
export const DishCard = ({ addItemToCart, mainDish }) => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 2,
          height: "auto",
        }}
      >
        <CardContent>
          <Typography component="h2" sx={{ fontWeight: "bold" }}>
            {mainDish.name}
          </Typography>
          <Typography component="p">
            Ingredients: <br></br>
            {mainDish.ingredients}
          </Typography>
          <CardActions>
            <Button variant="outlined" endIcon={<AddIcon />} onClick={() => addItemToCart(mainDish)}>
              {mainDish.price}
            </Button>
          </CardActions>
        </CardContent>
        <CardMedia
          sx={{ width: 151, height: "auto" }}
          component="img"
          image={mainDish.image}
          alt="food img"
        />
      </Card>
      
    </>
  );
};
