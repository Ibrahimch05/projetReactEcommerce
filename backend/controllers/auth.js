const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/auth");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const { json } = require("express");
const sendemail = require("../utils/sendemail");
const sendEmailPassword = require("../utils/sendEmailPassword");
const Role = require("../models/role");
const { send } = require("process");

// create Token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

//method post
// url : /api/auth/login
// acess : public
const Login = asyncHandler(async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next({ message: "Please add all fields", status: 400 });
    }
    const findUser = await User.findOne({ email: email }).populate("role");
    // const findTraiteur = await Traiteur.findOne({ email: email }).populate("role");

    
    console.log('findUser.role',findUser.role)

    if (findUser) {
      console.log('findUser',findUser)
      
      const match = await bcryptjs.compare(password, findUser.password);
      console.log('match',match)
      if (match) {
        if (findUser.status == false) {
          return next({ message: "verify email pour validation", status: 400 });
        } else {
          const token = createToken(findUser.id);
          return (
            res
              // .cookie('myrole', findUser.role)
              .cookie("accessToken", token)
              .status(201)
              .json({
                id: findUser.id,
                name: findUser.name,
                email: findUser.email,
                role: findUser.role,
                message: "login successfuly",
              })
          );
        }
      }
      return next({ message: "password not correct", status: 400 });
    } 
    else {
      // console.log('user not regestered')
      return next({ message: "email not right", status: 400 });
    }
  } catch (err) {
    return next({ message: err });
  }
});

//method post
// url : /api/auth/regester
// acess : public
const Register = asyncHandler(async (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return next({ message: "Please add all fields", status: 400 });
    // return next({message:"Please add all fields"})
  }

  // check if user exists
  const authExists = await User.findOne({ email });
  if (authExists) {
    return next({message: "user already exist ",status: 400,
    });
    // throw new Error('user already exist ')
  }
  //hash password
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(password, salt);

  // create user
  let user = await User.create({
    name,
    email,
    password: hashedPassword,
    status: false,
    token: crypto.randomBytes(64).toString("hex"),
    role: "65887c8b9a7dcbf0e1069a8b",
  });

  console.log('register user',user);

  // rappel function send email
  sendemail (user.email, user.token);

  if (user) {
    res.status(201).json(user);
  } else {
    return next({ message: "invalid uset data", status: 400 });
    // res.status(400)
    // throw new Error('Invalid user data')
  }
});

//------------ function verification
const verificationEmail = async (req, res) => {
  const emailtoken = req.params.token;
  const user = await User.findOne({ token: emailtoken });
  if (user) {
    user.token = null;
    user.status = true;
    await user.save();
    res.status(201).send("verification valid ");
    console.log("verification valid");
  } else {
    console.log("tekon non valid");
  }
};

//method post
// url : /api/auth/forgetpassword
// acess : public
const Forgetpassword = async (req, res, next) => {
  // const {email }= req.body
  try {
    const { email } = req.body;
    if (!email) {
      res.status(400);
      return next({ message: "Please add email" });
    }

    const user = await User.findOne({ email });
    console.log('user',user)
    if (!user) {
      res.status(400);
      // .json({err: 'email non exit'})
      return next({ message: "email non exit" });
    } else {
      console.log('tekonnn')
      const token = createToken(user.id);
      console.log("token forget password=> " + token);
      
      sendEmailPassword(user.email, token);
      res.status(400);
      return send({ message: "check email pour valid password" });
    }
  } catch (err) {
    console.log(err);
  }
};

//method post
// url : /api/auth/resetpassword
// acess : public
const Resetpassword = asyncHandler(async (req, res) => {
  const { password, confpassword } = req.body;

  if (!password || !confpassword) {
    res.status(400);
    throw new Error("Please add password ");
  } else if (password != confpassword) {
    res.status(400);
    throw new Error("password not match ");
  }

  const token = req.params.token;
  console.log(token);
  const userid = await jwt.verify(token, process.env.JWT_SECRET);

  const salt = await bcryptjs.genSalt(10);
  const hashPassword = await bcryptjs.hash(password, salt);

  await User.findOneAndUpdate({ _id: userid.id }, { password: hashPassword });

  res.status(200).json({ mess: "password has update successfuly" });
});


const showAllUser = async (req, res) => {
  try {
      const allUser = await User.find({}).populate("role");
      return res.status(200).json(allUser);
      // Handle the retrieved user as needed
  } catch (error) {
      console.error('Error getting users:', error);
      return res.status(500).json({ message: 'Error retrieving users', error: error });
  }
};

module.exports = {
  Login,
  Register,
  Forgetpassword,
  Resetpassword,
  verificationEmail,
  showAllUser,
};
