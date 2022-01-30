import React, {useState, useContext} from "react";
import { CommentContext } from "../context/CommentProvider";


const initInputs ={
    comment: ""
}


export default function CommentForm(props){


const {_id, postWaterComment}=useContext(CommentContext)
const [inputs, setInputs]= useState(initInputs)


function handleChange(e) {
    const {name, value} = e.target
    setInputs( prevInputs => ({
        ...prevInputs,
        [name]: value
    }))
}

const {comment}=inputs



return(


<form style={{height:"80px"}} onSubmit={(e) => {
                e.preventDefault()
                postWaterComment(inputs, _id)
                console.log(inputs)
            }}>
                <input
                    type="text"
                    name="comment"
                    value={ comment}
                    onChange={handleChange}
                    placeholder="comment"
                />
                <button>Add Comment</button>
            </form>



)

}