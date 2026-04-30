import user_model from "../model/user.Model.js";
import bcrypt from "bcrypt"

export const regiter_user = async (req,res) => {
    const { username, email, password } = req.body;
    try {
        if (!username || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            })
        }
        const user_exist = await user_model.findOne({ email });
         if (user_exist) {
            return res
              .status(401)
            //   .redirect("/auth/login")
              .json({
                message: "User already exist logging the user instead",
              })
        }
        
        const hash_password = await bcrypt.hash(password, 10);
        const new_user = new user_model(
            {
                password: hash_password,
                email,
                username
            }
        )
        const saved_user = await new_user.save();
        return res.status(201).json({
            message: "user created successfully"
        });
    } catch (error) {
        console.error("Register Error:", error);
        return res.status(500).json({
          message: "Something went wrong registering the user",
        });
    }
}

export const login_user = async (req, res) => {
    const { email, password } = req.body;
    try {
         if (!email || !password) {
           return res.status(400).json({
             message: "All fields are required",
           });
        }
        const user_match = await user_model.findOne({ email });
        if (!user_match) {
            return res
                .status(201)
                .json({
               message: "User not found",
             });
        }
        const correct_credentials = await bcrypt.compare(password, user_match.password);
        if (correct_credentials) {
            res.status(200).json({
                message: "Logged in sucessfully",
            });
        } else {
             res.status(400).json({
               message: "Invalid credentials"
             });
        }
    } catch (error) {
         return res.status(500).json({
           message: "something went wrong logging in the user",
         });
    }
}

export const admin_login = async (req, res) => {
        const { email, password } = req.body;
    try {
         if (!email || !password) {
           return res.status(400).json({
             message: "All fields are required",
           });
        }
        const user_match = await user_model.findOne({ email });
        if (!user_match) {
            return res
                .status(201)
                .json({
               message: "User not found",
             });
        }
        const correct_credentials = await bcrypt.compare(password, user_match.password);
        if (correct_credentials) {
            res.status(200).json({
                message: "Logged in sucessfully",
            });
        } else {
             res.status(400).json({
               message: "Invalid credentials"
             });
        }
    } catch (error) {
         return res.status(500).json({
           message: "something went wrong logging in the user",
         });
    }
}


export default {
    regiter_user,
    login_user,
    admin_login
}