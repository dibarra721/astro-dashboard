import { useContext, useState } from "react";

import EditDash from "../forms/EditDash";
import { UserContext } from "../context/UserProvider";

export default function Dashboard(props){

    const {
        _id, imgUrl, note, first, second, third,
        fourth,fifth,sixth,seventh,eighth,ninth,
        tenth,eleventh,twelfth
    }= props

    const [editToggle, setEditToggle] = useState(false)


    const {addDashboard, deleteDashboard}= useContext(UserContext)


    return(
        <div className="dashboardbasic">

            { 
            !editToggle ?
                <>
                        <img src={imgUrl} alt={imgUrl} />

                        <h3><span id="notedes">Note:{note}</span></h3>

                  <div className="dashboardList">
                      <h2>Houses and their Planet</h2>
<ul>
                            <li>First: {first}</li>
                            <li>Second: {second}</li>
                            <li>Third: {third}</li>
                            <li> Fourth: {fourth}</li>
                            <li> Fifth: {fifth}</li>
                            <li> Sixth: {sixth}</li>
                            <li> Seventh: {seventh}</li>
                            <li>Eighth: {eighth}</li>
                            <li> Ninth: {ninth}</li>
                            <li> Tenth: {tenth}</li>
                            <li> Eleventh: {eleventh}</li>
                            <li> Twelfth: {twelfth}</li>
                            </ul>
<button onClick={() => setEditToggle(prevState => !prevState)}>Edit Dashboard</button>
<button onClick={() => deleteDashboard(_id)}>Delete Dashboard</button>

                        </div> </>
:
<>
<EditDash {...props} setEditToggle={setEditToggle} addDashboard={addDashboard}/>
<button onClick={() => setEditToggle(prevState => !prevState)}>Cancel Edit</button>


</>
}
            </div>
           
    )


}