import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import {
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  ButtonGroup,
} from "@mui/material";
import _ from "lodash";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
// export const ItemsContext = React.createContext({
//   shoppingCartProducts: {},
//   setShoppingCartProducts: () => {}
// });

export default function ShoppingCart({
  isCartOpen,
  toggleCart,
  products,
  reset,
  addItemToCart,
  removeItemFromCart,
  openCheckout,
  currentUserId,
}) {
  //const navigate = useNavigate();
  const finalPrice = products.reduce((acc, product) => acc + product.price, 0);
  const groupedProducts = _.groupBy(products, (item) => item.name); // products.map((item)=>{item.name}) //{"banana":[{}], "tomato":["tomato"]}

  const commonStyles = {
    bgcolor: "background.paper",
    m: 1,
    borderColor: "text.primary",
    width: "5rem",
    height: "5rem",
  };

  const handleOrderNow = () => {
    toggleCart();
    fetch(
      process.env.REACT_APP_SERVER_URL + `/users/${currentUserId}/orders`,
      {method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        Object.keys(groupedProducts).reduce((acc, x) => ({...acc, [x]: groupedProducts[x].length}), {})
      )}
    )
  }

  // add plus one for the item
  //const groupedId = _.groupBy(products, (item) => item.id);
  return (
    <Drawer anchor={"right"} open={isCartOpen} onClose={toggleCart}>
      <Box sx={{ ...commonStyles, borderBottom: 1, width: 300 }}>
        {Object.keys(groupedProducts).map((group, index) => {
          let count = groupedProducts[group].length;

          return (
            <Card
              variant="none"
              sx={{
                marginBottom: 1,
                height: "90px",
              }}
              key={index}
            >
              <CardContent>
                <Typography component="div" sx={{ display: "flex" }}>
                  <Box sx={{ display: "flex", flexGrow: 1 }}>
                    {`${count}x`} {group} &nbsp;
                  </Box>

                  <Box sx={{ display: "flex" }}>
                    $
                    {groupedProducts[group].reduce(
                      (acc, item) => acc + item.price,
                      0
                    )}
                  </Box>
                </Typography>

                <CardActions>
                  <ButtonGroup disableElevation variant="contained">
                    <Button
                      onClick={() =>
                        removeItemFromCart(groupedProducts[group][0])
                      }
                    >
                      -
                    </Button>
                    <Button
                      onClick={() =>
                        addItemToCart({
                          ...groupedProducts[group][0],
                          id: uuid(),
                        })
                      }
                    >
                      +
                    </Button>
                  </ButtonGroup>
                </CardActions>
              </CardContent>
            </Card>

            // <ListItemText key={index}>
            //   {group} {count} &nbsp;
            //   {groupedProducts[group].reduce((acc, item) => acc + item.price, 0)}
            // </ListItemText>
          );
        })}

        <Divider />

        <Card
          variant="none"
          sx={{
            marginBottom: 1,
            height: "100px",
          }}
        >
          <CardContent>
            <Typography component="div" sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexGrow: 1 }}>Total:</Box>
              <Box sx={{ display: "flex" }}>{finalPrice}</Box>
            </Typography>
            <CardActions>
              <Button onClick={reset} variant="contained">
                Clear
              </Button>
              <Button onClick={handleOrderNow} variant="contained">
                Order now!
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Box>
    </Drawer>
  );
}
// open={state["right"]}
// onClose={toggleDrawer("right", false)}
