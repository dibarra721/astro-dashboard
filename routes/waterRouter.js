const express = require('express')
const waterRouter= express.Router()
const Comment= require('../models/comment')



// get all comments 
waterRouter.get("/", (req, res, next) => {
    Comment.find((err,comments) => {
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})


waterRouter.get('/user', (req, res, next) => {
  Comment.find({ user: req.user._id }, (err, comments) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(comments)
    })
  })


waterRouter.get("/user/:userId", (req, res, next) => {
 Comment.find(
    //   { user: req.params.userId },
      (err, comments) => {
        if (err) {
          res.status(500)
          return next(err)
        }
        return res.status(200).send(comments)
      })
  })
  
  //get a comment by the id
waterRouter.get('/:commentId', (req, res, next) => {
    Comment.findById(req.params.commentId, (err, comment) => {
      if (err) {
        res.status(500)
        return next(err)
      } else if (!comment) {
        res.status(404)
        return next(new Error('No post item has been found.'))
      }
      return res.send(comment)
    })
  })



// water comments
waterRouter.get('/water', (req, res, next) => {
    Comment.find(
        { commentId: req.params.commentId },
        (err, watercomments) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            res.status(200).send(watercomments)
        }
    )
})


// post to water forum

waterRouter.post("/", (req, res, next) => {
  // req.body.user = req.user._id
  req.body.user = req.user._id

    // req.body.userId = req.user._id
    req.body.username = req.user.username
    req.body.commentId = req.params.commentId
    const newComment = new Comment(req.body)
    newComment.save(
        (err, watercomment) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(watercomment)
        }
    )
})
// update water comment
waterRouter.put('/comment/:commentId', (req, res, next) => {
    Comment.findOneAndUpdate(
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




module.exports = waterRouter 