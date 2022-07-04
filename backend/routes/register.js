import express from "express";
import { registerPost } from "../controllers/registerController.js";
import { checkValidation } from "../validators/checkValidation.js";
import requiredValues from "../validators/requiredValues.js";
const router = express.Router();


router.post(
  "/",
  requiredValues(["password", "emailAddress", "lastName", "firstName", "city", "country", "address"]),
  checkValidation,
  registerPost
); // POST /register


export default router;
