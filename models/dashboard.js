const mongoose = require('mongoose')
const Schema = mongoose.Schema



const dashboardSchema = new Schema({

imgUrl:{
    type:String,
    
},
note:{
    type:String,
    required:true
},
list:{
    type:String
},
user:{
    type:Schema.Types.ObjectId,
    ref:"User",
    required:true
}

})


module.exports = mongoose.model("Dashboard", dashboardSchema)