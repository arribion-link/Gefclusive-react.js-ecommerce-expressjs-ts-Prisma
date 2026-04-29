import user_model from "../model/user.Model.js";
import bcrypt from "bcrypt"

const regiter_user = async (req,res) => {
    const { username, email, password } = req.body;
    try {
        if (!username || !email || password) {
            return res.status(400).json({
                message: "All fields are required"
            })
        }
        const user_exist = await user_model.findOne({ email });
         if (user_exist) {
            return res
              .status(401)
              .json({
                message: "User already exist logging the user instead",
              })
              .redirect("/auth/login");
        }
        const hash_password = await bcrypt.hash(password, 10);
        const new_user = {
            password: hash_password,
            email,
            username
        }
         await new_user.save();
        return res.status(201).json({
            message: "user created successfully"
        });
    } catch (error) {
        return res.status(500).json({
            message:"something went wrong registering the user"
        })
    }
}

const login_user = async () => {
    const { email, password } = req.body;
    try {
         if (!email || password) {
           return res.status(400).json({
             message: "All fields are required",
           });
        }
        const user_match = user_model.findOne({ email });
        if (!user_match) {
            return res
                .status(201)
                .json({
               message: "User not found",
             });
        }
        const correct_credentials = await bcrypt.compare(password, user_match.password);
        if (!correct_credentials) {
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

const admin_login = () => {
    try {
        
    } catch (error) {
        
    }
}


export default {
    regiter_user,
    login_user,
    admin_login
}