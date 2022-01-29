import React, {useContext} from "react"
import { Route, Switch, Redirect} from "react-router-dom";
import Navbar from "./components/Navbar.js"
import Auth from "./components/Auth.js"
import PrivateDashboard from "./components/PrivateDashboard"
import ProtectedRoute from "./components/ProtectedRoute.js"
import { UserContext} from "./context/UserProvider"
import './App.css'






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
    {/* <ProtectedRoute
      path="/forum"
      component={Public}
      redirectTo="/"
      token={token} /> */}
    {/* <Route path="*" element={<NotFound />} render={() => <NotFound />} /> */}

  </Switch>
</div></>
)





}