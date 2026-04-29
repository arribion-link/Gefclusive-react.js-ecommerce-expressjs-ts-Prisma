import { timeStamp } from "console";
import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    email: {
      required: true,
      type: String,
      unique: true,
    },
    user_name: {
      required: true,
      type: String,
    },
    password: {
      type: String,
      required: true,
        },
        cartData: {
            type: Object,
            default: {},
            
    }
  },
    { timestamps: true },
    {minimize: false}
);

const user_model = mongoose.models.UserCollection ||
    mongoose.model("UserCollection", userSchema);
export default user_model;