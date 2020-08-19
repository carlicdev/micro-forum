const { Schema, model } = require('mongoose');
const { ObjectId } = Schema;
const slugify = require('slugify');

const postSchema = new Schema({
    _id: { type: ObjectId },
    title: { type: String, required: true },
    slug: { type: String, required: true },
    category: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Date, default: Date.now },
    views: { type: Number, default: 0 },
    comments:{ type: Array }
});

postSchema.pre('validate', function(next) {
    if(this.title) {
        this.slug = slugify(this.title, {lower: true, strict: true});
    }
    next();
});

module.exports = model('Post', postSchema);