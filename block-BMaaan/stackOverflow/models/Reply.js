let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let replySchema = new Schema(
  {
    reply: String,
    author: { type: Schema.Types.ObjectId, ref: "User" },
    question: { type: Schema.Types.ObjectId, ref: "Question" },
    answer: { type: Schema.Types.ObjectId, ref: "Answer" },
    upVotes: { type: Number, default: 0 },
    downVotes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

replySchema.index({ upVotes: 1 });

var Reply = mongoose.model(`Reply`, replySchema);

module.exports = Reply;
