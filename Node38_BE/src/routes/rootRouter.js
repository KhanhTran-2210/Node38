// tổng hợp tất cả các routes của các routes khác: videoRoutes, userRoutes, ..

import express from "express";
import videoRoutes from "./videoRouters.js";
import userRoutes from "./userRoutes.js";
import restaurantRoutes from "./restaurantRoutes.js";

const rootRoutes = express.Router();

rootRoutes.use("/video", videoRoutes);
rootRoutes.use("/user", userRoutes);
rootRoutes.use("/restaurant", restaurantRoutes);

export default rootRoutes;
