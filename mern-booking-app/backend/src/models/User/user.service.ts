import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDB = async (payload: TUser) => {
    

    const email= payload.email
    const user = await User.findOne({ email });
  if (user) {
    throw new Error("User Already exists");
  }
  const result = await User.create(payload);
 

  return result;
};

export const UserServices= {
    createUserIntoDB,
}
