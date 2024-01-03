import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../../config";
import { UserServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.createUserIntoDB(req.body);
    console.log(result);
    const token = jwt.sign(
      { userId: result.id },
      config.jwt_secrct_key as string,
      {
        expiresIn: "1d",
      }
    );
    res.cookie("auth-token",token,{
        httpOnly:true,
        secure: config.NODE_ENV==="production",
        maxAge:86400000
    })
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || "Something went wrong",
      error: err,
    });
  }
};

export const UserController = {
  createUser,
};
