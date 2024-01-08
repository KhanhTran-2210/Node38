import express from "express";
import storage from "../controllers/uploadControllers.js";
import {
  uploadMultipleAvatar,
  uploadSingleAvatar,
} from "../controllers/userControllers.js";
import { checkToken, khoaApi } from "../config/jwt.js";

const userRoutes = express.Router();

userRoutes.post(
  "/upload-avatar",
  khoaApi,
  storage.single("file"),
  uploadSingleAvatar
);

userRoutes.post(
  "/upload-multiple-avatar",
  storage.array("files"),
  uploadMultipleAvatar
);

export default userRoutes;
