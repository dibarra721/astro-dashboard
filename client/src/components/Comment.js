import React from "react"

export default function Comment(props) {

const {comment, username} = props



return (
    <>
    <p>"{comment}"</p>
    <p>Comment submitted by: @{username}</p>
   
    {/* <button onClick={()=> deleteComment(_id)}>Delete Comment</button> */}
    </>
)




}