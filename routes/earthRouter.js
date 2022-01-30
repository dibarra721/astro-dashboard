const express = require('express')
const earthRouter= express.Router()
const Earth= require('../models/earth')



// get all comments 
earthRouter.get("/", (req, res, next) => {
   Earth.find((err,earthComments) => {
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(earthComments)
    })
})


earthRouter.get('/user', (req, res, next) => {
Earth.find({ user: req.user._id }, (err, earthComments) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(earthComments)
    })
  })


earthRouter.get("/user/:userId", (req, res, next) => {
Earth.find(
    //   { user: req.params.userId },
      (err, earthComments) => {
        if (err) {
          res.status(500)
          return next(err)
        }
        return res.status(200).send(earthComments)
      })
  })
  
  //get a comment by the id
earthRouter.get('/:earthId', (req, res, next) => {
  Earth.findById(req.params.earthId, (err, earthcomment) => {
      if (err) {
        res.status(500)
        return next(err)
      } else if (!earthcomment) {
        res.status(404)
        return next(new Error('No post item has been found.'))
      }
      return res.send(earthcomment)
    })
  })



// earth comments
earthRouter.get('/earth', (req, res, next) => {
   Earth.find(
        { earthId: req.params.earthId },
        (err, earthcomments) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            res.status(200).send(earthcomments)
        }
    )
})


// post to earth forum

earthRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    req.body.username = req.user.username
    req.body.earthId = req.params.earthId
    const newEarth = new Earth(req.body)
    newEarth.save(
        (err, earthcomment) => {
            if (err) {
                res.status(500)
               return  next(err)
            }
            return res.status(201).send(earthcomment)
        }
    )
})
// update water comment
earthRouter.put('/comment/:commentId', (req, res, next) => {
  Earth.findOneAndUpdate(
      { _id: req.params.commentId, user: req.user._id },
      req.body,
      { new: true },
      (err, updatedComment) => {
        if (err) {
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedComment)
      }
    )
  })



module.exports = earthRouter 