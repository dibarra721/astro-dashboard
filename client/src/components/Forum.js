import React from "react"
import { Link } from 'react-router-dom'
import {Route, Switch} from "react-router-dom"
import Earth from "./Earth"
import Water from "./Water"
import Air from "./Air"
import Fire from "./Fire"






export default function ForumHome(){



return(

    <><>

        <h1>Hello world Click the links below to Check out the Forums</h1>
        <li> <Link to="/water"> Water Forum</Link>
            <Link to="/earth"> Earth Forum</Link>
            <Link to="/air"> Air Forum</Link>
            <Link to="/fire"> Fire  Forum</Link></li>

    </></>
)



}