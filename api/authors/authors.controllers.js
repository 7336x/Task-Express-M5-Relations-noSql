const Author = require("../../models/Author");
const Post = require("../../models/Post");

//fetch authors
exports.authorsGet = async (req, res, next) => {
  try {
    const authors = await Author.find().populate("posts");
    res.json(authors);
  } catch (error) {
    next(error);
  }
};

//create author
exports.authorsCreate = async (req, res, next) => {
  try {
    const newAuthor = await Author.create(req.body);
    res.status(201).json(newAuthor);
  } catch (error) {
    next(error);
  }
};

exports.createPostForAuthor = async (req, res, next) => {
  try {
    req.body.authorId = req.params.authorId;
    const newPost = await Post.create(req.body);
    await Author.findByIdAndUpdate(req.params.authorId, {
      $push: { posts: newPost._id },
    });
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};
