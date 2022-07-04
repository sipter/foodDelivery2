//import { db } from "../index.js";
import { UserModel } from "../models/User.js";
import createHttpError from "http-errors";
import bcrypt from "bcryptjs";
export const loginPost = async (req, res, next) => {
  const { emailAddress, password } = req.body;
  let found;
  try {
    found = await UserModel.findOne({
      emailAddress: emailAddress,
    });
  } catch (err) {
    console.log(err)
    return next(
      new createHttpError[404](alert("No user exists with this email"))
    );
  }
  console.log(found, "found")
  if (found && (await bcrypt.compare(password, found.password))) {
    res.json({ id: found._id });
  } else {
    next(createHttpError(401, "You could not be logged in. Please try again"));
  }
};
