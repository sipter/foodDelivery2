import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String,required: true  },
    address: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    emailAddress: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    orders: [{ type: String }],
  },
  { timestamps: true }
); // createAt and updateAt properties to each user document => timestamps options

userSchema.pre("save", async function (next) {
  if (!this.firstName) {
    this.firstName = "John";
  }

  if (!this.lastName) {
    this.lastName = "Doe";
  }
  if (!this.orders) {
    this.orders = [];
  }
  next();
});

export const UserModel = mongoose.model("User", userSchema);
