const express = require("express")
const forumRouter = express.Router()
const Forum = require('../models/forum')


//get all forums
forumRouter.get("/", (req, res, next) => {
Forum.find((err, forums) => {
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send(forums)
})
})

// get user 

// forumRouter.get('/user', (req, res, next) => {
//   Forum.find({ user: req.user._id }, (err, forums) => {
//       if (err) {
//         res.status(500)
//         return next(err)
//       }
//       return res.status(200).send(forums)
//     })
//   })



//   forumRouter.get("/user/:userId", (req, res, next) => {
//     Forum.find(
//       { user: req.params.userId },
//       (err, forums) => {
//         if (err) {
//           res.status(500)
//           return next(err)
//         }
//         return res.status(200).send(forums)
//       })
//   })

// get  water

  forumRouter.get("/water", (req, res, next) => {
    Forum.find((err, waterforum) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(waterforum)
    })
    })


    // get air
    forumRouter.get("/air", (req, res, next) => {
        Forum.find((err, airforum) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(airforum)
        })
        })

        // get earth

        forumRouter.get("/earth", (req, res, next) => {
            Forum.find((err, earthforum) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(earthforum)
            })
            })

            // get fire
            forumRouter.get("/fire", (req, res, next) => {
                Forum.find((err, fireforum) => {
                    if(err){
                        res.status(500)
                        return next(err)
                    }
                    return res.status(200).send(fireforum)
                })
                })
        
    
        











module.exports = forumRouter