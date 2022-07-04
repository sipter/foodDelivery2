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
export const SaladsCard = ({ addItemToCart, salad }) => {
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
            {salad.name}
          </Typography>
          <Typography component="p">
            Ingredients: <br></br>
            {salad.ingredients}
          </Typography>
          <CardActions>
            <Button
              variant="outlined"
              endIcon={<AddIcon />}
              onClick={() => addItemToCart(salad)}
            >
              ${salad.price}
            </Button>
          </CardActions>
        </CardContent>
        <CardMedia
          sx={{ width: 151, height: "auto" }}
          component="img"
          image={salad.image}
          alt="food img"
        />
      </Card>
    </>
  );
};
