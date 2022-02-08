const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
const secret = process.env.SECRET || "Bobs Burger"




const PORT = process.env.PORT || 9000;
// ... other imports
const path = require("path")
app.use(express.static(path.join(__dirname, "client", "build")))

app.use(express.json())
app.use(morgan('dev'))


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/astro-dash",
    {
      useNewUrlParser: true,
     
    },
    () => console.log('Connected to the database')
  )

  app.use('/api', expressJwt({secret: process.env.SECRET, algorithms: ['HS256']}))
  app.use('/auth', require('./routes/authRouter.js'))
  app.use('/api/dashboard', require('./routes/dashboardRouter.js'))
//   app.use('/api/forum', require('./routes/forumRouter.js'))
  app.use('/api/water', require('./routes/waterRouter.js'))
  app.use('/api/earth', require('./routes/earthRouter.js'))



  app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
  })
  


// Right before your app.listen(), add this:
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

  
  app.listen(PORT, () => {
    console.log(`Server is running on local port`)
  })