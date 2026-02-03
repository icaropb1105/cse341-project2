const jwt = require('jsonwebtoken');

const googleCallback = (req, res) => {
  const token = jwt.sign(
    { id: req.user._id },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({
    message: 'Login successful',
    token
  });
};

const logout = (req, res) => {
  res.json({ message: 'Logged out successfully' });
};

module.exports = { googleCallback, logout };
