const mongoose = require('mongoose');


const userSchema = mogoose.Schema({

    name:{type:String,required:true},
    email: { type: String, required: true },
    password: { type: String, required: true },
    pic: { type: String, required: true, default:"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" },

},
{

    timestamps:true

})

const User = mongoose.model("user",userSchema);

module.exports = User;