var articleSchema = new Schema({
  title: { type: String },
  description: { type: String },
  tags: [String],
});

articleSchema.index({ tags: 1 });
articleSchema.index({ title: 'text' });
articleSchema.index({ title: 'text', description: 'text' });

var Article = mongoose.model('Article', articleSchema);
module.exports = Article;
