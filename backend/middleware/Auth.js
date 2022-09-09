const { User } = require("../models/User.js");
const jwt = require("jsonwebtoken");

 const isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Login to Access this resource",
      });
    }

    const decoded = jwt.verify(token, process.env.TOKEN);

    const user = await User.findById(decoded._id);
     console.log(user)
    req.user = user;

    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {isAuthenticated}