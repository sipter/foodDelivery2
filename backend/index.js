import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

import globalErrorHandler from "./middleware/globalErrorHandler.js";
import registerRouter from "./routes/register.js";
import loginRouter from "./routes/login.js";
import usersRouter from "./routes/users.js";
import mongoose from "mongoose";
const app = express();

dotenv.config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.jkffr.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
);
mongoose.connection.on("open", () =>
  console.log("database connection established")
);
mongoose.connection.on("error", () => console.error);

// Allows ALL cors requests to all our routes
app.use(cors());

// We can use express's .json() method to parse JSON data received in any request
app.use(express.json());

// Register our "logger" middleware (no longer used - now we are using "morgan" for logging)
// app.use(logger);

// Use morgan to make a small log every time a request is received
app.use(morgan("tiny"));

app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/users", usersRouter);
//app.use("/orders", ordersRouter);

// The last registered middleware = global error handler
app.use(globalErrorHandler);

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server has started on port ${process.env.port || 3001}!`);
});
