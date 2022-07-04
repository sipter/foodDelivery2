import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    dishes: {
      type: Map,
      of: Number
    }
  },
  { timestamps: true }
);

export const OrderModel = mongoose.model("Order", orderSchema);
