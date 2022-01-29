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
    type:String,
    enum: ['Aries', 'Taurus','Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio','Sagittarius', 'Capricorn','Aquarius', 'Pisces' ],

},
second:{
    type:String,
    enum: ['Aries', 'Taurus','Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio','Sagittarius', 'Capricorn','Aquarius', 'Pisces' ],

},
third:{
    type:String,
    enum: ['Aries', 'Taurus','Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio','Sagittarius', 'Capricorn','Aquarius', 'Pisces' ],

},
fourth:{
    type:String,
    enum: ['Aries', 'Taurus','Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio','Sagittarius', 'Capricorn','Aquarius', 'Pisces' ],

},
fifth:{
    type:String,
    enum: ['Aries', 'Taurus','Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio','Sagittarius', 'Capricorn','Aquarius', 'Pisces' ],

},
sixth:{
    type:String,
    enum: ['Aries', 'Taurus','Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio','Sagittarius', 'Capricorn','Aquarius', 'Pisces' ],

},
seventh:{
    type:String,
    enum: ['Aries', 'Taurus','Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio','Sagittarius', 'Capricorn','Aquarius', 'Pisces' ],

},
eighth:{
    type:String,
    enum: ['Aries', 'Taurus','Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio','Sagittarius', 'Capricorn','Aquarius', 'Pisces' ],

},
ninth{
    type:String,
    enum: ['Aries', 'Taurus','Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio','Sagittarius', 'Capricorn','Aquarius', 'Pisces' ],

},
tenth:{
    type:String,
    enum: ['Aries', 'Taurus','Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio','Sagittarius', 'Capricorn','Aquarius', 'Pisces' ],

},
eleventh:{
    type:String,
    enum: ['Aries', 'Taurus','Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio','Sagittarius', 'Capricorn','Aquarius', 'Pisces' ],

},
twelfth:{
    type:String,
    enum: ['Aries', 'Taurus','Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio','Sagittarius', 'Capricorn','Aquarius', 'Pisces' ],

},

user:{
    type:Schema.Types.ObjectId,
    ref:"User",
    required:true
}

})


module.exports = mongoose.model("Dashboard", dashboardSchema)