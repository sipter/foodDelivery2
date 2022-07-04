import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
//import { ItemsContext } from "./ShoppingCart";

export default function Review() {
  //const shoppingCartProducts = React.useContext(ItemsContext);
  console.log("***********")
  //console.log(shoppingCartProducts, "shopping cart products");
  //console.log(this.context, "this.context")
  const products = [];

  // Object.keys(shoppingCartProducts).forEach((item) => {
  //   products.push(item);
  //   console.log(item, item);
  // });

  console.log(products, "products");
console.log("***********")
  const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
  const payments = [
    { name: "Card type", detail: "Visa" },
    { name: "Card holder", detail: "Mr John Smith" },
    { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
    { name: "Expiry date", detail: "04/2024" },
  ];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List>
        {products.map((product, index) => (
          <ListItem key={index}>
            <ListItemText primary={product} />
            <Typography variant="h5">{product}</Typography>
          </ListItem>
        ))}

        {/* {Object.keys(shoppingCartProducts).forEach((product,index) => (
          <ListItem key={index} sx={{ py: 1, px: 0 }}>
           
            <Typography variant="body2">{product}</Typography>
          </ListItem>
        ))} */}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
