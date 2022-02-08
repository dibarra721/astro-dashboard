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
                            <li>First House: {first}</li>
                            <li>Second House: {second}</li>
                            <li>Third House: {third}</li>
                            <li> Fourth House: {fourth}</li>
                            <li> Fifth House: {fifth}</li>
                            <li> Sixth House: {sixth}</li>
                            <li> Seventh House : {seventh}</li>
                            <li> Eighth House: {eighth}</li>
                            <li> Ninth House: {ninth}</li>
                            <li> Tenth House: {tenth}</li>
                            <li> Eleventh House: {eleventh}</li>
                            <li> Twelfth House: {twelfth}</li>
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