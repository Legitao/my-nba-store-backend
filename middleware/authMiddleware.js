const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const protect = asyncHandler(async (req, res, next) => {
  let auth_header = req.headers.authorization;

  if (auth_header && auth_header.startsWith('Bearer')) {
    try {
      token = auth_header.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.userId = decoded.id;

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

module.exports = { protect };
