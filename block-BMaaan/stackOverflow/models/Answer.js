let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let answerSchema = new Schema(
  {
    answer: String,
    author: { type: Schema.Types.ObjectId, ref: "User" },
    replies: [{ type: Schema.Types.ObjectId, ref: "Reply" }],
    upVotes: { type: Number, default: 0 },
    downVotes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

answerSchema.index({ upVotes: 1 });

db.data.aggregate({
  $group: {
    _id: "$answer",
    count: { sum: 1 },
  },
});

var Answer = mongoose.model(`Answer`, answerSchema);

module.exports = Answer;
