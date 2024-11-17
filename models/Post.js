const { model, Schema } = require("mongoose");

const PostSchema = new Schema({
  title: String,
  body: String,
  authorId: {
    type: Schema.Types.ObjectId,
    ref: "Author",
  },
});

module.exports = model("Post", PostSchema);
