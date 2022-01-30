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
    <><h2>Hello Start the Conversation Below</h2>
    
    
    <CommentForm postWaterComment={postWaterComment} />
    {waterComments.map(comment => <Comment key={comment._id} waterComments={waterComments} {...comment}   />)}

    
    
    
    
    </>


    )
}