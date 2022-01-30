const mongoose = require('mongoose')
const Schema = mongoose.Schema



const earthSchema = new Schema({

  comment: {
    type: String,
    required: true
  },

    postedOn:{
        type: Date,
        default: Date.now
    },

    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: "User",
    //     required: true
    //   }, 

      // userId: {
      //   type: Schema.Types.ObjectId,
      //   ref: "User",
      //   required: true
      // },
      user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

      username: {
        type: String,
        required: true
      },

      earthId:{
        type: Schema.Types.ObjectId,
        ref: "User",
        // required: true
      }
    
})



module.exports= mongoose.model("Earth", earthSchema)