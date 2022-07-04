import { UserModel } from "../models/User.js";
import createHttpError from "http-errors";
import { OrderModel } from "../models/Order.js";

import mongoose from "mongoose";

export const getUserData = async (req, res, next) => {
  const userId = req.params.id;

  let foundUser;
  try {
    foundUser = await UserModel.findById(userId);
  } catch {
    return next(
      new createHttpError[401]("couldn't query database. Please try again")
    );
  }

  if (foundUser) {
    const userData = {
      firstName: foundUser.firstName,
    };

    res.json(userData);
  } else {
    next(new createHttpError[404]("User could not be found"));
  }
};

//===========
export const deleteUser = async (req, res, next) => {
  const userId = req.params.id;

  let deleteUser;

  try {
    deleteUser = await UserModel.findByIdAndRemove(userId, {
      new: true,
      runValidators: true,
    });
  } catch {
    return next(createHttpError[500]("could not be updated"));
  }

  res.json({
    message: "Your account has been successfully deleted. Come back soon!",
  });
};

export const saveOrder = async (req, res, next) => {
  const currentUserId = req.params.id;
  const body = req.body;

  const newOrder = new OrderModel({
    dishes: body,
  });

  let orderId;
  try {
    const order = await newOrder.save();
    orderId = order._id.toString();
  } catch {
    return next(new createHttpError[500]("Order could not be created"));
  }

  try {
    let user = await UserModel.findById(mongoose.Types.ObjectId(currentUserId));
    user.orders = [...user.orders, orderId];
    user.save();
  } catch {
    return next(new createHttpError[500]("Error updating user's orders"));
  }

  res.status(201).send();
};
