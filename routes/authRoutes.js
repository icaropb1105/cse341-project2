const express = require('express');
const passport = require('passport');
const { googleCallback, logout } = require('../controllers/authController');

const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: '/auth/failed' }),
  googleCallback
);

router.get('/logout', logout);

router.get('/failed', (req, res) => {
  res.status(401).json({ message: 'Authentication failed' });
});

module.exports = router;
