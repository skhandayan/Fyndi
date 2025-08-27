import User from "../models/user.js";
import jwt from 'jsonwebtoken';

async function protect(req, res, next){
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {

    try {

      token = req.headers.authorization.split("=")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      req.user = await User.findById(decoded.id).select("-password");

      return next();

    } catch (error) {
      console.log("Token verification failed:", error.message);
      return res.status(401).json({message: "Not authorized, token failed"})
    }
  }
  return res.status(401).json({message: "Not authorized, token failed"})
}

export default protect