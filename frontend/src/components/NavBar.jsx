import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { Badge, Container, Menu, MenuItem } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCart from "./ShoppingCart";
import { styled } from "@mui/material/styles";
import { AccountCircle } from "@mui/icons-material";
import SignIn from "./SignIn";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 18,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function NanBar({
  toggleCart,
  length,
  setCurrentUserId,
  setIsLoggedIn,
  isLoggedIn,
}) {
  let navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const pages = ["STARTER", "SALADS", "MAIN-DISH", "DESSERT", "DRINKS"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuItemPress = (page) => {
    handleCloseNavMenu();
    navigate(`/${page}`);
  };

  const handleMenu = (event) => {
    navigate(`/sign-in`);
  };

  const handleLogout = () => {
    setCurrentUserId("");
    setIsLoggedIn(false);
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "10px" }}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={() => handleMenuItemPress("")}>
                  <Typography textAlign="center">home</Typography>
                </MenuItem>
                {pages.map((item, index) => (
                  <MenuItem
                    onClick={() => handleMenuItemPress(item)}
                    key={index}
                  >
                    <Typography textAlign="center">{item}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "space-between",
              }}
            >
              <Button color="inherit" onClick={() => handleMenuItemPress("")}>
                HOME
              </Button>
              {pages.map((item, index) => (
                <Button
                  color="inherit"
                  onClick={() => handleMenuItemPress(item)}
                  key={index}
                >
                  {item}
                </Button>
              ))}
            </Box>
            <StyledBadge color="secondary" badgeContent={length}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={"mobileMenuId"}
                aria-haspopup="true"
                color="inherit"
                edge="end"
                onClick={toggleCart}
              >
                <ShoppingCartIcon color="inherit" />
              </IconButton>
            </StyledBadge>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            { isLoggedIn ? <Button color="inherit" onClick={handleLogout}>
              LOG OUT
            </Button> : null }
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
