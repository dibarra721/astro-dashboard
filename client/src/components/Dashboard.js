import React from "react";
// import { UserContext } from "../context/UserProvider";

export default function Dashboard(props){

    const {
        _id, imgUrl, note, first, second, third,
        fourth,fifth,sixth,seventh,eighth,ninth,
        tenth,eleventh,twelfth
    }= props

    // const {addDashboard}= useContext(UserContext)


    return(

        <>
        <div className="dashboardbasic">

            <img src={imgUrl} alt={imgUrl} />

            <h3>Note:{note}</h3>

        </div>
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


            </div>
            </>
    )


}