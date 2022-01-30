import React, { useState } from "react"
import axios from "axios"


const CommentContext = React.createContext()
const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function CommentProvider(props){


    const [waterComments, setWaterComments]=useState([])
    const [earthComments, setEarthComments]=useState([])
    const [earthUserComments, setEarthUserComments]=useState([])
    const [waterUserComments, setWaterUserComments]=useState([])


// get all Water comments 
    function getWaterComments() {
        userAxios.get("/api/water")
        .then(res => setWaterComments(res.data))
        .catch(err => console.log(err.response.data.errMsg))
}

function postWaterComment(){
    userAxios.get("/api/water/comment")
    .then(res => setWaterComments(res.data))
    .catch(err => console.log(err.response.data.errMsg))
}



// get all Earth Comments 
function getEarthComments() {
    userAxios.get("/api/earthr")
    .then(res => setEarthComments(res.data))
    .catch(err => console.log(err.response.data.errMsg))
}

function postEarthComment(){
    userAxios.get("/api/earth/comment")
    .then(res => setWaterComments(res.data))
    .catch(err => console.log(err.response.data.errMsg))
}

















return(

<CommentContext.Provider
value={{
getEarthComments,
getWaterComments,
postEarthComment,
postWaterComment



}}>
{props.children}



</CommentContext.Provider>




)







}












export { CommentContext, CommentProvider }