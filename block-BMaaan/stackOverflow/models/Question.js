let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let questionSchema = new Schema(
  {
    title: String,
    author: { type: Schema.Types.ObjectId, ref: "User" },
    upVotes: { type: Number, default: 0 },
    downVotes: { type: Number, default: 0 },
    tags: [String],
    views: { type: Number, default: true },
  },
  { timestamps: true }
);

questionSchema.index({ title: "text", upVotes: 1, views: 1 });

db.data.aggregate({ $unwind: "$tags" });
db.data.aggregate({
  $group: {
    _id: null,
    totalQuestions: { $sum: 1 },
  },
});

var Question = mongoose.model(`Question`, questionSchema);

module.exports = Question;
