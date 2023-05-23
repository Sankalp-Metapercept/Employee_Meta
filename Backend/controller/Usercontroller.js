// Controller for Logic Purpose
const User = require("../Model/UserModel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const SECRET_KEY = process.env.SECRET_KEY;

exports.Register = async (req, res) => {
  const {email, password: plainTextPassword } = req.body;

  if (!email || typeof email !== "string") {
    return res.json({ message: "Valid Email is required" });
  }

  if (!plainTextPassword || typeof plainTextPassword !== "string") {
    return res.json({ message: "Valid plainTextPassword is required" });
  }
  
  const password = await bcrypt.hash(plainTextPassword, 8);
   console.log(password);
  try {
    const response = await User.create({
      email,
      password,
    });
    return res.status(200).json({
      message: "User Created Successfully",
      data: response,
    });
  } catch (error) {
    if (error.code === 11000) {
      //Duplicate Data
      return res.status(409).json({
        message: "User Already Exists",
      });
    } else {
      return res.status(300).json({
        message: "Something went wrong",
      });
    }
  }
};


exports.Login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email : email });
  
    if (!user) {
    return res.status(404).json({
      message: "User Not Found",
    });
  }
  
  try {
    if(await bcrypt.compare(password, user.password)){
      /* This is basically creating a token for the user. */
      const Token = jwt.sign(
        {
          email: user.email,
          id: user._id.toString(),
        },
        SECRET_KEY
      );
      return res.status(200).json({
        status: "ok",
        message: "Login successfully",
        accessToken: Token,
      });
    }else{
       return res
       .status(200)
       .json({
         status: "Failed",
         message: "Login failed",
       });
    } 
  } catch (error) {
    return res.status(300).json({
      message: "Something went wrong",
    });
  }
};

