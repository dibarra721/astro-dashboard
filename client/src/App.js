import React, {useContext} from "react"
import { Route, Switch, Redirect} from "react-router-dom";
import Navbar from "./components/Navbar.js"
import Auth from "./components/Auth.js"
import PrivateDashboard from "./components/PrivateDashboard"
import ProtectedRoute from "./components/ProtectedRoute.js"
import { UserContext} from "./context/UserProvider"
import './App.css'
import ForumHome from "./components/Forum.js";
import Water from "./components/Water.js";
import Earth from "./components/Earth.js";
import Air from "./components/Air.js";
import Fire from "./components/Fire.js";





export default function App(){


  const { token, logout } = useContext(UserContext)



return(


  <><div className="wrapper">
  {token && <Navbar logout={logout} />}
  <Switch>
    <Route
      exact path="/"
      render={() => token ? <Redirect to="/dashboard" /> : <Auth />} />
    <ProtectedRoute
      path="/dashboard"
      component={PrivateDashboard}
      redirectTo="/"
      token={token} />
    <ProtectedRoute
      path="/forum"
      component={ForumHome}
      redirectTo="/"
      token={token} />
       <ProtectedRoute
      path="/water"
      component={Water}
      redirectTo="/"
      token={token} 
      />
       <ProtectedRoute
      path="/earth"
      component={Earth}
      redirectTo="/"
      token={token} 
     />
      <ProtectedRoute
      path="/air"
      component={Air}
      redirectTo="/"
      token={token} 
     />
      <ProtectedRoute
      path="/fire"
      component={Fire}
      redirectTo="/"
      token={token} 
     />
    {/* <Route path="*" element={<NotFound />} render={() => <NotFound />} /> */}

  </Switch>
</div></>
)





}