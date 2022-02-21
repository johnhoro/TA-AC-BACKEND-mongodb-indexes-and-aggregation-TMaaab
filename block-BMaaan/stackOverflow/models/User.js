var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  reputation: { type: Number, default: 0 },
});

userSchema.index({ email: 1 });

db.data.aggregate({ $group: { _id: "$reputation", total: { sum: 1 } } });

var User = mongoose.model(`User`, userSchema);

module.exports = User;
