import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Component/Home/Home";
import Spot_Container from "./Component/Spot_Container/Spot_Container";
import Datepicker from "./Component/Datepicker/Datepicker";
import Nomatch from "./Component/Nomatch";

import Booking from "./Component/Booking/Booking";
import Login from "./Component/Login/Login";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";

export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <p className="text-warning">email:{loggedInUser.email}</p>
        <Router>
          <Home></Home>
          <Switch>
            <Route exact path="/">
              <Spot_Container></Spot_Container>
            </Route>
            <Route path="/spot/:spotName">
              <Datepicker></Datepicker>
            </Route>
            <Route path="/signIn">
              <Login></Login>
            </Route>
            <PrivateRoute path="/Booking/:spotName">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <Nomatch></Nomatch>
            </Route>
          </Switch>
        </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
