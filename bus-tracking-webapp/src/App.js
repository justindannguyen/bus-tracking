// @flow

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import React from 'react';
import LiveTracking from "./Views/LiveTracking";
import Home from "./Views/Home";
import AdminHome from "./Views/Admin/Home";
import Page404 from "./Components/404";

function App() {
  return (
    <Router>
      <div>
        {
          // TBD - Commmon template go here 
        }
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/admin/live" >
            <LiveTracking />
          </Route>
          <Route exact path={`/admin/`}>
            <AdminHome />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
