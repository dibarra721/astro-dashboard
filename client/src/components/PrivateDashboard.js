import React, { useContext , useEffect} from "react";
import DashForm from "../forms/DashForm"
import { UserContext } from "../context/UserProvider.js"
import DashboardList from "./DashboardList";
import EditDash from "../forms/EditDash";



export default function PrivateDashboard(props){

const {
    user: {username},
    addDashboard,
    getUserDashboard,
    userDashboard, 
   
    
}
=useContext(UserContext)


useEffect(() => {
    getUserDashboard()
}, [userDashboard])


return(
    <><h1> {username} Welcome to your dashboard</h1>
    <p>Click <a href="https://justastrologythings.com/pages/chart/" target="_blank" rel="noreferrer"> here</a> to get an imgURL of your birth chart, and copy it into the form. </p>
    
    
    <DashForm  addDashboard={addDashboard}/>



<div className="populatedDash">

<DashboardList dashboard={userDashboard}/>

</div>
</>
)


}