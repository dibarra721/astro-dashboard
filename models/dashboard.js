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
first:{
    type:String
},
second:{
    type:String
},
third:{
    type:String
},
fourth:{
    type:String
},
fifth:{
    type:String
},
sixth:{
    type:String
},
seventh:{
    type:String
},
eighth:{
    type:String
},
ninth{
    type:String
},
tenth:{
    type:String
},
eleventh:{
    type:String
},
twelfth:{
    type:String
},

user:{
    type:Schema.Types.ObjectId,
    ref:"User",
    required:true
}

})


module.exports = mongoose.model("Dashboard", dashboardSchema)