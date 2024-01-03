import cors from "cors";
import "dotenv/config";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { UserRoutes } from "./models/User/user.route";

mongoose.connect(process.env.DATABASE_URI as string);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({
    message: "Hello Test API!!!",
  });
});
app.use("/api/users",UserRoutes);
app.listen(4000,()=>{
    console.log("Server is running on port 4000");
})