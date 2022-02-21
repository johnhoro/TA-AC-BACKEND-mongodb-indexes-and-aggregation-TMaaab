var mongoose = require(`mongoose`);
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String },
  username: { type: String ,unique:true},
  email: { type: String, required: true, unique: true },
  address: {
    city: { type: String },
    state: { type: String },
    country: { type: String ,unique:true},
    pin: { type: String },
  },
});

userSchema.index({`address.state`: 1, `address.country`: 1});

var User = mongoose.model(`User`, userSchema);
module.exports = User;
