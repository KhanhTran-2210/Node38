import express from "express";
import {
  addRate,
  createLikeRestaurant,
  createOrder,
  getLikeOnUser,
  getRateOnUser,
  getUser,
  unLikeRestaurant,
} from "../controller/userControlers.js";

const userRoutes = express.Router();

userRoutes.get("/get-user", getUser);
userRoutes.post("/like", createLikeRestaurant);
userRoutes.delete("/unlike/:likeId", unLikeRestaurant);
userRoutes.get("/likes/:userId", getLikeOnUser);
userRoutes.post("/rate", addRate);
userRoutes.get("/rates/:userId", getRateOnUser);
userRoutes.post("/order", createOrder);
export default userRoutes;
