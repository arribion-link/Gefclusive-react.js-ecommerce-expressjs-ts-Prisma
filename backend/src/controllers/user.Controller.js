import user_model from "../model/user.Model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
const {
    JWT_REFRESH_TOKEN_SECRET,
    JWT_ACCESS_TOKEN_SECRET
} = process.env;
if (!JWT_REFRESH_TOKEN_SECRET || !JWT_ACCESS_TOKEN_SECRET) {
  console.log("error accessing jwt secrets");
  process.exit(1);
}
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
            const accessToken = jwt.sign(
              { username: user_match.username },
              JWT_ACCESS_TOKEN_SECRET,
              { expiresIn: "15m" },
            );
            const refreshToken = jwt.sign(
              { username: user.username },
              JWT_REFRESH_TOKEN_SECRET,
              { expiresIn: "1d" },
            );
            res
              .cookie("jwt", refreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: "Strict",
                maxAge: 24 * 60 * 60 * 1000,
              })
              .status(200)
                .json({
                    accessToken,
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

export const refreshToken = async (req,res) => {
    try {
        const token = req.cookies?.jwt;
        if (!token) return res.sendStatus(401);
        jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
          if (err) return res.sendStatus(403);
          const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "15m",
          });
          res.json({ accessToken });
        });
    } catch (error) {
        res.status(500).json({
            error
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
    refreshToken,
    admin_login
}