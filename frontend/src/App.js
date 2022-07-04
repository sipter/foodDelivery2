// import logo from "./logo.svg";
import "../src/style/App.css";
import React from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Home } from "./view/Home";
import { MainDish } from "./view/MainDish";
import { Dessert } from "./view/Dessert";
import { Starter } from "./view/Starter";
import { Salads } from "./view/Salads";
import { Drinks } from "./view/Drinks";
import { Container, createTheme, CssBaseline, Typography } from "@mui/material";
import NavBar from "../src/components/NavBar";
import ShoppingCart from "./components/ShoppingCart";
import { ThemeProvider } from "@emotion/react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Checkout from "./components/CheckOut";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4d8993",
    },
    secondary: {
      main: "#d9cebf",
    },
  },
});
function App() {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  // const addItemToCart = (item) => setProducts([...products, item]);
  const addItemToCart = (item) => {
    localStorage.setItem("products", JSON.stringify([...products, item]));
    setProducts([...products, item]);
  };
  const removeItemFromCart = (item) => {
    localStorage.setItem(
      "products",
      JSON.stringify(products.filter((x) => x.id !== item.id))
    );
    setProducts(products.filter((x) => x.id !== item.id));
  };

  React.useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products"));
    if (products) {
      setProducts(products);
    }
  }, []);

  const emptyCart = () => {
    setProducts([]);
    localStorage.clear();
  };

  const length = products.length;

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUserId, setCurrentUserId] = React.useState("");
  // const [showLogin, setShowLogin] = React.useState(true);
  // const [token, setToken] = React.useState(false);
  // If no user is currently logged in

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <NavBar toggleCart={toggleCart} length={length} isLoggedIn={isLoggedIn} setCurrentUserId={setCurrentUserId} setIsLoggedIn={setIsLoggedIn} />
          {/* <div> */}
          {/* <header>
          <Header/> 
        </header> */}

          {/* <Route path="/" exact component={Header} /> */}

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <ShoppingCart
            currentUserId={currentUserId}
            isCartOpen={isCartOpen}
            toggleCart={toggleCart}
            products={products}
            reset={emptyCart}
            addItemToCart={addItemToCart}
            removeItemFromCart={removeItemFromCart}
          />
          <Container maxWidth="lg">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route
                path="/starter"
                exact
                element={<Starter addItemToCart={addItemToCart} />}
              />
              <Route
                path="/salads"
                exact
                element={<Salads addItemToCart={addItemToCart} />}
              />
              <Route
                path="/main-dish"
                exact
                element={<MainDish addItemToCart={addItemToCart} />}
              />
              <Route
                path="/dessert"
                exact
                element={<Dessert addItemToCart={addItemToCart} />}
              />
              <Route
                path="/drinks"
                exact
                element={<Drinks addItemToCart={addItemToCart} />}
              />
              <Route path="/sign-in" exact element={<SignIn 
                setIsLoggedIn={setIsLoggedIn}
                isLoggedIn={isLoggedIn}
                setCurrentUserId={setCurrentUserId} 
              />} />
              <Route path="/sign-up" exact element={<SignUp 
                isLoggedIn={isLoggedIn}
              />} />
              <Route
                path="/check-out"
                exact
                element={<Checkout toggleCart={toggleCart} />}
              />
            </Routes>
          </Container>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
