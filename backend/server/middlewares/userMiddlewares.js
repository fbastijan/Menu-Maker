const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. Token not provided." });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token." });
    }

    req.userId = decoded.id; // Attach the user ID to the request object
    next();
  });
}

module.exports = {
  verifyToken,
};
