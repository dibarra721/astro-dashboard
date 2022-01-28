const express = require('express')
const dashboardRouter = express.Router()
const Dashboard = require('../models/dashboard')



// Get all dashboards 
dashboardRouter.get("/", (req, res, next) => {
    Dashboard.find((err, dashboards) => {
        if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send(dashboards)
    })
})


// get all dashboards by userID

dashboardRouter.get("/user", (req, res, next) => {
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

module.exports = dashboardRouter