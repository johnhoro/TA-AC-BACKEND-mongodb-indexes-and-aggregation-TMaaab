var mongoose = require(`mongoose`);
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: { type: String },
  description: { type: String },
  tags: [String],
});

articleSchema.index({ tags: 1 });
articleSchema.index({ $text: { title: 1 } });

var Article = mongoose.model(`Article`, articleSchema);

module.exports = Article;
