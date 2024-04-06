const express = require("express");
const app = express();
const cors = require("cors");

const bodyparser = require("body-parser");
// const sequelize = require("./sequelize");
// const Sequelize = require("sequelize");

var port = process.env.PORT || 8080;

// This section will load all routes require and other controllers.
const clientroute = require("./Router/Client.js");
const leadroute = require("./Router/Lead.js");
const followuproute = require("./Router/FollowUp.js");
const mobile = require("./Router/Mobile.js");
const email = require("./Router/Email.js");
const alumni = require("./Router/Alumni.js");
const product = require("./Router/Product.js");
const interest = require("./Router/Interest.js");
const batch = require("./Router/Batch.js");
const userroute = require("./Router/User.js");

const isAuth = require("./Controller/isAuth");
const isUser = require("./Controller/isUser");
const { Verifytoken } = require("./config");
const updatepassword = require("./Controller/updatepassword");
const jwtVerify = require("./Middleware/jwtVerification.js");

//----------------------------------------------------------------

//This section consist of all middleware used by this app
app.use(cors());
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));

// const unless = (path, middleware) => {
//   return (req, res, next) => {
//     if (path === req.path) {
//       return next();
//     } else {
//       return middleware(req, res, next);
//     }
//   };
// };

// app.use(unless("/login", jwtVerify));
//--------------------------------

//All request
app.get("/", (req, res) => {
  res.send("Running");
});

app.use("/client", clientroute);
app.use("/lead", leadroute);
app.use("/followUp", followuproute);
app.use("/mobile", mobile);
app.use("/email", email);
app.use("/alumni", alumni);
app.use("/product", product);
app.use("/interest", interest);
app.use("/user", userroute);
app.use("/batch", batch);
app.post("/login", isAuth);
app.post("/forgetpassword", isUser);

app.post("/session", (req, res) => {
  const username = req.body.username;
  const jwt = req.body.token;
  if (Verifytoken(jwt, username)) {
    res.status(200).json({ auth: true });
  } else {
    res.status(400).json({ auth: false });
  }
});

app.post("/forgetpassword/password", updatepassword);

//-----------------------------
app.listen(3000, () => {
  console.log("Running");
});
