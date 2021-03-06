const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Index Page
router.get('/', forwardAuthenticated, (req, res) => res.render('index'));

// Public Main Page
router.get('/publicmain', forwardAuthenticated, (req, res) => res.render('publicmain'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

module.exports = router;
