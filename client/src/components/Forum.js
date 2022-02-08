import React from "react"
import { Link } from 'react-router-dom'


export default function ForumHome(){



return(

    <>
    
        <h1> Click the links below to Check out the Forums</h1>
        This Part of the Website is under construction. You can comment on the Water and Earth Forum
    
    <div className="forumstyle">

        <li> <Link to="/water"> Water Forum</Link>
            <Link to="/earth"> Earth Forum</Link>
            <Link to="/air"> Air Forum</Link>
            <Link to="/fire"> Fire  Forum</Link></li>

            </div> </>
)



}