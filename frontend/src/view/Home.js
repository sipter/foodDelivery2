import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { Link } from "react-router-dom";

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Food Delivery App
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

export const Home = () => {
  return (
    <Container>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <img
          alt="tables amd chairs "
          style={{
            width: "100%",
            height: "88vh",
            objectFit: "cover",
            objectPosition: "right",
          }}
          src="https://images.unsplash.com/photo-1539634058035-781bdc1fe9a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <img
          alt="tables amd chairs "
          style={{
            width: "100%",
          }}
          src="https://images.unsplash.com/photo-1539634058035-781bdc1fe9a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
      </Box>{" "}
    </Container>
  );
};
