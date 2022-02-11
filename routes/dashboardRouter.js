const express = require('express')
const dashboard = require('../models/dashboard')
const dashboardRouter = express.Router()
const Dashboard = require('../models/dashboard')



// Get all dashboards 
dashboardRouter.get("/", (req, res, next) => {
    Dashboard.find((err, dashboard) => {
        if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send(dashboard)
    })
})

// get all dashboards by user

dashboardRouter.get('/user', (req, res, next) => {
    Dashboard.find({ user: req.user._id}, ( err, dashboard) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(dashboard)
    })
})


// get dashboard by user id

dashboardRouter.get("/user/:dashboardId", (req, res, next) => {
    Dashboard.findById(req.params.dashboardId, (err, dashboard) => {
        if (err) {
          res.status(500)
          return next(err)
        } else if (!dashboard) {
          res.status(404)
          return next(new Error('No post item has been found.'))
        }
        return res.send(dashboard)
      })
    })




// add a new dashboard

dashboardRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newDashboard = new Dashboard(req.body)
   newDashboard.save((err, savedDashboard) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedDashboard)
    })
})



//get a dashbpard by the id
dashboardRouter.get('/:dashboardId', (req, res, next) => {
    Dashboard.findById(req.params.dashboardId, (err, dashboard) => {
      if (err) {
        res.status(500)
        return next(err)
      } else if (!dashboard) {
        res.status(404)
        return next(new Error('No post item has been found.'))
      }
      return res.send(dashboard)
    })
  })
// update dashboard

dashboardRouter.put("/:dashboardId", (req, res, next) => {
    Dashboard.findOneAndUpdate(
        { _id: req.params.dashboardId, user: req.user._id},
        req.body,
        {new: true},
        (err, updatedDashboard) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedDashboard)
        }

    )
})

// delete dashboard 

dashboardRouter.delete("/:dashboardId", (req, res, next) => {
  Dashboard.findOneAndDelete(
    { _id: req.params.dashboardId, user: req.user._id},
    (err, deletedDashboard) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted issue: ${deletedDashboard.note}`)
    }
  )
})

dashboardRouter

module.exports = dashboardRouter