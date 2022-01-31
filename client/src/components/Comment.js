import React from "react"

export default function Comment(props) {

const {comment, username} = props



return (
    <>
    <div className="comments">
        <br/>
    <p>"{comment}"</p>
    <p>Comment submitted by: @{username}</p>
    </div>
    </>
)




}