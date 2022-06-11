const { Schema, model } = require('mongoose');



const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required:'Please provide a username!',
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: 'You must provide a valide email!',
            trim: true,
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
              }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
              }
        ]

    }
);
user.path('email').validate(function (email) {
    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(email.text); // Assuming email has a text attribute
 });

 UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;