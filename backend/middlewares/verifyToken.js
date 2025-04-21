import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) {
    return res.status(403).json({ message: 'Unauthorized, JWT token is required' });
  }
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified; 
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Unauthorized, JWT token is invalid or expired' });
  }
};
