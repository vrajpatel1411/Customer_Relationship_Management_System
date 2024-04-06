const { Verifytoken } = require("../config");

const jwtVerify = (req, res, next) => {
  if (Verifytoken(req.params.token, req.params.username)) {
    next();
  } else {
    res.status(401).json({ message: false, data: "Unauthenticated" });
  }
};

module.exports = jwtVerify;
