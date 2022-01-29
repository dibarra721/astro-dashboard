import React from "react";
import Dashboard from './Dashboard.js'


export default function DashboardList(props){


const { dashboard } = props

return(
    <div className="dashboardLists">

{dashboard.map(dashboard => <Dashboard {...dashboard} key={dashboard._id} />)}



    </div>
)





}