const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = (roles = []) => {
  if (typeof roles === 'string') {
    roles = [roles];
  }

  return async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token provided' });

    try {
      const decoded = jwt.verify(token, 'your_jwt_secret');
      req.user = await User.findById(decoded.id);
      if (roles.length && !roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Access denied' });
      }
      next();
    } catch (err) {
      res.status(401).json({ message: 'Invalid token' });
    }
  };
};

module.exports = auth;
