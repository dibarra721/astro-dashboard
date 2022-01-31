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


    const {addDashboard}= useContext(UserContext)


    return(
        <div className="dashboardbasic">

            { 
            !editToggle ?
                <>
                        <img src={imgUrl} alt={imgUrl} />

                        <h3>Note:{note}</h3>

                  <div className="dashboardList">

                            <li>First:{first}</li>
                            <li>Second:{second}</li>
                            <li>Third:{third}</li>
                            <li> Fourth:{fourth}</li>
                            <li> Fifth:{fifth}</li>
                            <li> Sixth:{sixth}</li>
                            <li> Seventh:{seventh}</li>
                            <li>Eighth:{eighth}</li>
                            <li> Ninth:{ninth}</li>
                            <li> Tenth:{tenth}</li>
                            <li> Eleventh:{eleventh}</li>
                            <li> Twelfth:{twelfth}</li>
<button onClick={() => setEditToggle(prevState => !prevState)}>Edit Dashboard</button>
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