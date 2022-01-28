const mongoose = require('mongoose')
const Schema = mongoose.Schema



const forumSchema = new Schema({


user:{
    type:Schema.Types.ObjectId,
    ref:"User",
    required:true
},
// commentId:{
//     type: Schema.Types.ObjectId,
//     ref: "User",
//     required: true
//   }


})


module.exports = mongoose.model("Forum", forumSchema)