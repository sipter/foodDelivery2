import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate, Navigate } from "react-router-dom";

const themeSignIn = createTheme({
  palette: {
    primary: {
      main: "#4d8993",
    },
    secondary: {
      main: "#d9cebf",
    },
  },
});

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

//const theme = createTheme();

export default function SignIn({
  isLoggedIn,
  setCurrentUserId,
  setIsLoggedIn,
  setShowLogin,
}) {
  let navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const updateData = (event) => {
    switch (event.target.name) {
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      default:
        break;
    }
  };

  const attemptLogin = async (event) => {
    event.preventDefault();
    const loginData = {
      emailAddress: email,
      password: password,
    };

    const settings = {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + "/login",
      settings
    );
    const parsedRes = await response.json();

    try {
      // If the request was successful
      if (response.ok) {
        setCurrentUserId(parsedRes.id);
        setIsLoggedIn(true);
        navigate("/");
      } else {
        throw new Error(parsedRes.message);
      }
    } catch (err) {
      alert(err.message);
      setEmail("");
      setPassword("");
    }
  };

  return isLoggedIn ? (
    <Navigate to="/" />
  ) : (
    <ThemeProvider theme={themeSignIn}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={attemptLogin}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={updateData}
              value={email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={updateData}
              value={password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  onClick={() => navigate(`/sign-up`)}
                  variant="body2"
                  style={{ cursor: "pointer" }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
