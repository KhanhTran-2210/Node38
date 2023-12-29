import express from "express";
import { createVideo, getVideo } from "../controller/videoControler.js";

const videoRoutes = express.Router();

videoRoutes.get("/get-video", getVideo); // define API get-videp có method là GET
videoRoutes.post("/create-video", createVideo); // define API create-videp có method là POST

export default videoRoutes;
