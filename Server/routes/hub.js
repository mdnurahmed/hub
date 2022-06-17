const express = require("express");

const hubController = require("../controllers/hub");

const router = express.Router();

// GET /feed/posts
router.get("/hubs", hubController.getHubs);

// POST /feed/post
router.post("/hub", hubController.createHub);

// POST /feed/post
router.post("/company", hubController.createCompany);

module.exports = router;
