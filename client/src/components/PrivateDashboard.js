import React, { useContext , useEffect} from "react";
import DashForm from "../forms/DashForm"
import { UserContext } from "../context/UserProvider.js"
import DashboardList from "./DashboardList";



export default function PrivateDashboard(props){

const {
    user: {username},
    addDashboard,
    getUserDashboard,
    dashboard,
    userDashboard
    
}
=useContext(UserContext)


useEffect(() => {
    getUserDashboard()
}, [])


return(
    <><h1> {username} Welcome to your dashboard</h1>
    
    
    <DashForm  addDashboard={addDashboard}/>



<div className="populatedDash">

<DashboardList dashboard={userDashboard}/>

</div>
</>
)


}