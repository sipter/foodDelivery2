import express from "express";
import { getUserData, deleteUser, saveOrder } from '../controllers/usersController.js';
const router = express.Router();

router.get("/:id", getUserData); // GET /user/1234
router.delete("/:id", deleteUser);
router.post("/:id/orders", saveOrder)
export default router;
