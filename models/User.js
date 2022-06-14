const { Schema, model } = require('mongoose');

//const FriendSchema = new Schema(

//);

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
            required: 'You must provide a valid email!',
            trim: true,
            match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'not valid email!']
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

const User = model('User', UserSchema);


 UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});



module.exports = User;