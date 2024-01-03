import bcrypt from 'bcrypt';
import mongoose, { model } from "mongoose";
import config from '../../config';
import { TUser } from "./user.interface";

const userSchema = new mongoose.Schema<TUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

userSchema.pre('save', async function (next) {
    //hashing password and save into db
    this.password = await bcrypt.hash(
      this.password,
      Number(config.bcrypt_salt_rounds),
    );
    next();
  });
  userSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
  });
export const User = model<TUser>("User", userSchema);
