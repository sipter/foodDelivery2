import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";

export const StarterCard = ({ addItemToCart, starter }) => {
  return (
    // <>
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
          {starter.name}
        </Typography>
        <Typography component="p">
          Ingredients: <br></br>
          {starter.ingredients}
        </Typography>
        <CardActions>
          <Button
            variant="outlined"
            endIcon={<AddIcon />}
            onClick={() => addItemToCart(starter)}
          >
            {starter.price}
          </Button>
        </CardActions>
      </CardContent>
      <CardMedia
        sx={{ width: 151, height: "auto" }}
        component="img"
        image={starter.image}
        alt="food img"
      />
    </Card>
  );
};
