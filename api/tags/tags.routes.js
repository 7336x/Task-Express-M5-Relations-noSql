const express = require("express");
const router = express.Router();
const { tagsGet, tagsCreate } = require("./tags.controllers");

// Route to get all tags
router.get("/", tagsGet);

// Route to create a new tag
router.post("/", tagsCreate);

module.exports = router;
