import express from "express";
import {
  getLikeOnRes,
  getListRestaurant,
  getRateOnRes,
} from "../controller/restaurantController.js";

const restaurantRoutes = express.Router();

restaurantRoutes.get("/get-restaurant", getListRestaurant);
restaurantRoutes.get("/likes/:resId", getLikeOnRes);
restaurantRoutes.get("/rates/:resId", getRateOnRes);

export default restaurantRoutes;
