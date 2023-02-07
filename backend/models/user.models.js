const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlenght: 3
    },
},
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;