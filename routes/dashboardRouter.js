const express = require('express')
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

dashboardRouter.get("/user/:userId", (req, res, next) => {
    Dashboard.find({ user: req.user._id}, ( err, dashboards) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(dashboards)
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

module.exports = dashboardRouter