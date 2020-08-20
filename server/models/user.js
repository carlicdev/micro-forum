const { Schema, model } = require('mongoose');
const { ObjectId } = Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    _id: { type: ObjectId },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

// Handle password
userSchema.methods = {
    checkPassword: function(pw) {
        return bcrypt.compareSync(pw, this.password);
    },
    hashPassword: function(pw) {
        return bcrypt.hashSync(pw, 10);
    }
};

userSchema.pre('save', function(next) {
    if(!this.password) {
        next();
    } else {
        this.password = this.hashPassword(this.password);
        next();
    }
});

module.exports = model('User', userSchema);