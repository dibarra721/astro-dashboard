import React, { useState } from "react"
import axios from "axios"


const UserContext = React.createContext()
const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})


function UserProvider(props){


    const initState = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || "",
       dashboard: JSON.parse(localStorage.getItem("dashboard")) ||[],
        comment:JSON.parse(localStorage.getItem("comment")) ||[],
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)
    const [dashboard, setDashboard]=useState([])
    const [userDashboard, setUserDashboard]=useState([])

    function signup(credentials) {
        axios.post('/auth/signup', credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthError(err.response.data.errMsg))
    }
    function login(credentials) {
        axios.post('/auth/login', credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                getDashboard()
                getUserDashboard()
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthError(err.response.data.errMsg))
    }
    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem("dashboard")
        localStorage.removeItem("comment")
        setUserState({
            user: {},
            token: "",
            dashboard: [],
            comment: []
        })
    }


    function handleAuthError(errMsg) {
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }


    function getDashboard() {
        userAxios.get("/api/dashboard")
        .then(res => setDashboard(res.data))
        .catch(err => console.log(err.response.data.errMsg))
}
  

function getUserDashboard() {
    userAxios.get('/api/dashboard/user')
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                dashboard: res.data
            }))
            setUserDashboard(res.data)
        })
        .catch(err => console.log(err))
}


function addDashboard(newDashboard) {
    userAxios.post('/api/dashboard', newDashboard)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                dashboard: [...prevState.dashboard, res.data],
            }))
           
          })
        .catch(err => console.log(err))
}


return(

    <UserContext.Provider
    value={{
        ...userState,
        signup,
        login,
        logout,
        getDashboard,
        addDashboard,
        getUserDashboard,
        dashboard,
        userDashboard,
      
     
    }}>

    {props.children}
</UserContext.Provider>


)


}

export { UserContext, UserProvider }