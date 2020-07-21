const express = require('express');
const { getUserById } = require('../controllers/user');
const { getCategoryById, createCategory } = require('../controllers/category');
const { isSignedIn, isAuthenticated, isAdmin } = require('../controllers/auth');
const router = express.Router();

module.exports = router;

// params
router.param("userId", getUserById)
router.param("categoryId", getCategoryById)

// actual routes
router.post("/category/create/:userId", isSignedIn, isAuthenticated, isAdmin, createCategory)