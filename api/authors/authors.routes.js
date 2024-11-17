const express = require("express");
const router = express.Router();
const {
  authorsGet,
  authorsCreate,
  createPostForAuthor,
} = require("./authors.controllers");

//git:authors
router.get("/", authorsGet);

//post:create author
router.post("/", authorsCreate);

//newpost for author
router.post("/:authorId/posts", createPostForAuthor);

module.exports = router;
