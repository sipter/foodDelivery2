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

export const DessertCard = ({ addItemToCart, dessert }) => {
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
            {dessert.name}
          </Typography>
          <Typography component="p">
            Ingredients: <br></br>
            {dessert.ingredients}
          </Typography>
          <CardActions>
            <Button
              variant="outlined"
              endIcon={<AddIcon />}
              onClick={() => addItemToCart(dessert)}
            >
              {dessert.price}
            </Button>
          </CardActions>
        </CardContent>
        <CardMedia
          sx={{ width: 151, height: "auto" }}
          component="img"
          image={dessert.image}
          alt="food img"
        />
      </Card>
    </>
  );
};
