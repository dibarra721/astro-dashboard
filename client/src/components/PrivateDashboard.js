import React, { useContext , useEffect} from "react";
import DashForm from "../forms/DashForm"
import { UserContext } from "../context/UserProvider.js"
import DashboardList from "./DashboardList";



export default function PrivateDashboard(props){

const {
    user: {username},
    addDashboard,
    getUserDashboard,
    userDashboard
    
}
=useContext(UserContext)


useEffect(() => {
    getUserDashboard()
}, [])


return(
    <><h1> {username} Welcome to your dashboard</h1>
    <p>Click <a href="https://astro.cafeastrology.com/natal.php" target="_blank" rel="noreferrer"> here</a> to get your birthchart and paste the imgUrl in the form.</p>
    
    
    <DashForm  addDashboard={addDashboard}/>



<div className="populatedDash">

<DashboardList dashboard={userDashboard}/>

</div>
</>
)


}