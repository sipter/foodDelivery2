import { UserModel } from "../models/User.js";
import createHttpError from "http-errors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerPost = async (req, res, next) => {
  const { firstName, lastName,  address, city, country, emailAddress,password } =
    req.body;
  const securePassword = await bcrypt.hash(password, await bcrypt.genSalt(12));
  const newUser = new UserModel({
    firstName: firstName,
    lastName: lastName,
    address: address,
    city: city,
    country: country,
    emailAddress: emailAddress,
    password: securePassword,
  });

  try {
    await newUser.save();
  } catch (err) {
    console.log(err);
    return next(new createHttpError[500]("user could not be created"));
  }

  let token;
  try {
    token = jwt.sign({ id: newUser.id }, "myserverssecretkey", {
      expiresIn: "1h",
    });
  } catch {
    return next(
      createHttpError(500, "signup could not be completed. Please try again")
    );
  }
  res.status(201).json(token);
};
