import React, {useContext, useEffect} from "react"
import { CommentContext } from "../context/CommentProvider"
import EarthForm from "../forms/EarthForm"
import Comment from "./Comment"



export default function Earth(){

    const {
        postEarthComment,
        earthComments,
        getEarthComments,
        
        
    }
    =useContext(CommentContext)



   

    useEffect(() => {
       getEarthComments()
    }, [])
    

    return( 
        <>
        <center>
        <h2>Hello Start the Conversation Below</h2></center>
        <br></br>
    
    
        <EarthForm postEarthComment={postEarthComment} />
        {earthComments.map(comment => <Comment key={comment._id} earthComments={earthComments} {...comment}   />)}
    
    </>


    )
}