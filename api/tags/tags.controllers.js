const Tag = require("../../models/Tag");

exports.tagsGet = async (req, res, next) => {
  try {
    const tags = await Tag.find().populate("posts", "title body");
    res.json(tags);
  } catch (error) {
    next(error);
  }
};

exports.tagsCreate = async (req, res, next) => {
  try {
    const newTag = await Tag.create(req.body); // Create a new tag
    res.status(201).json(newTag);
  } catch (error) {
    next(error);
  }
};
