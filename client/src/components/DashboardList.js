import React from "react";
import Dashboard from './Dashboard.js'


export default function DashboardList(props){


const {dashboards} = props

return(
    <div className="dashboardLists">

{dashboards.map(dashboard => <Dashboard {...dashboard} key={dashboard._id} />)}



    </div>
)





}