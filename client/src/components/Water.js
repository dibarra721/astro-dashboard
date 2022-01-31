import React, {useContext, useEffect} from "react"
import { CommentContext } from "../context/CommentProvider"
import CommentForm from "../forms/CommentForm"
import Comment from "./Comment"


export default function Water(){

    const {
        postWaterComment,
        waterComments,
        getWaterComments,
    }
    =useContext(CommentContext)

    useEffect(() => {
       getWaterComments()
    }, [])
    

    return( 
    <><h2>Hello  Cancers, Pisces, and Scorpios. </h2>
    
    
    <CommentForm postWaterComment={postWaterComment} /><br/>
    {waterComments.map(comment => <Comment key={comment._id} waterComments={waterComments} {...comment}   />)}

    
    
    
    
    </>


    )
}