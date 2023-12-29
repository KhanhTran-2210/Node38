import express from "express";
import { getUser } from "../controller/userControlers.js";

const userRoutes = express.Router();

userRoutes.get("/get-user", getUser);
export default userRoutes;
