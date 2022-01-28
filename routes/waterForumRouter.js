const express = require('express')
const waterForumRouter= express.Router()
const Comment= require('../models/comment')



// get all comments 
waterForumRouter.get("/", (req, res, next) => {
    Comment.find((err,comments) => {
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})


waterForumRouter.get('/user', (req, res, next) => {
  Comment.find({ user: req.user._id }, (err, comments) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(comments)
    })
  })


waterForumRouter.get("/user/:userId", (req, res, next) => {
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
  
  //get a issue by the id
waterForumRouter.get('/:commentId', (req, res, next) => {
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
waterForumRouter.get('/water', (req, res, next) => {
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


// get all water comments
waterForumRouter.get('/water', (req, res, next) => {
    Comment.find((err,comments) => {
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

// post to water forum

waterForumRouter.post('/water', (req, res, next) => {
    req.body.userId = req.user._id
    req.body.username = req.user.username
    req.body.commentId = req.params.commentId
    const newComment = new Comment(req.body)
    newComment.save(
        (err, watercomment) => {
            if (err) {
                res.status(500)
                next(err)
            }
            return res.status(201).send(watercomment)
        }
    )
})
// update water comment
waterForumRouter.put("/water/:commentId", (req, res, next) => {
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




//   // earth comments
//   waterForumRouter.get('/earth', (req, res, next) => {
//     Comment.find(
//         { commentId: req.params.commentId },
//         (err, watercomments) => {
//             if (err) {
//                 res.status(500)
//                 return next(err)
//             }
//             res.status(200).send(watercomments)
//         }
//     )
// })


// // post to earth forum

// commentRouter.post('/water', (req, res, next) => {
//     req.body.userId = req.user._id
//     req.body.username = req.user.username
//     req.body.commentId = req.params.commentId
//     const newComment = new Comment(req.body)
//     newComment.save(
//         (err, watercomment) => {
//             if (err) {
//                 res.status(500)
//                 next(err)
//             }
//             return res.status(201).send(watercomment)
//         }
//     )
// })
// // update earth comment
// commentRouter.put("/water/:commentId", (req, res, next) => {
//     Comment.findOneAndUpdate(
//       { _id: req.params.commentId, user: req.user._id },
//       req.body,
//       { new: true },
//       (err, updatedComment) => {
//         if (err) {
//           res.status(500)
//           return next(err)
//         }
//         return res.status(201).send(updatedComment)
//       }
//     )
//   })



module.exports = waterForumRouter 