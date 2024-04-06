const jwt = require("jsonwebtoken");

const jsonsecret =
  "Hello! Hope you are fine. With this secret key you can access the api";

module.exports.Generatetoken = (user, userid, clientid) => {
  const token = jwt.sign(
    { user: user, userid: userid, clientid: clientid },
    jsonsecret
  );
  return token;
};

module.exports.Verifytoken = (token, user) => {
  flag = false;
  jwt.verify(token, jsonsecret, function (err, decoded) {
    if (err) {
      flag = false;
    } else {
      if (equal(decoded.user, user)) {
        flag = true;
      } else {
        console.log("False");
        flag = false;
      }
    }
  });
  return flag;
};

const equal = (user1, user) => {
  return (
    JSON.stringify(user1.toLowerCase()) === JSON.stringify(user.toLowerCase())
  );
};

// module.exports.url="https://crm-web-api.herokuapp.com"

// module.exports.url="https://crmapiexcel.herokuapp.com" //paste API URL here.

module.exports.url = "http://localhost:3000";
