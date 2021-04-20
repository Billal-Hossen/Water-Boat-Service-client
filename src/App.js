import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Admin from './components/Admin/Admin/Admin';
import Dashboard from './components/Deshboard/Dashboard/Dashboard';
import CustomerReview from './components/CustomerReview/CustomerReview/CustomerReview';
import Login from './components/Login/Login/Login';
import { createContext, useState } from 'react';
import ShowAllService from './components/Home/ShowAllServiceList/ShowAllServiceList';
import AllService from './components/Home/AllServiceList/AllServiceList';
import AllServiceList from './components/Home/AllServiceList/AllServiceList';
import Booking from './components/Customer/Booking/Booking';
import ManageServices from './components/Admin/ManageServices/ManageServices';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AddAdmin from './components/Admin/AddAdmin/AddAdmin';
import AddService from './components/Admin/AddService/AddService';


export const UserContext=createContext();


function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router >
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path="/addAdmin">
          <AddAdmin/>
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard/>
        </PrivateRoute>
        <Route path="/addService">
          <AddService/>
        </Route>
        {/* <PrivateRoute exact path="/admin">
       <Admin />
       </PrivateRoute> */}
       <Route path="/manageService">
         <ManageServices/>
       </Route>
     <Route path="/review">
     <CustomerReview/>
     </Route>
     <Route  path="/login">
            <Login/>
          </Route>
      </Switch>
      <Route path="/allServiceList">
        <AllServiceList/>
      </Route>
     <Route path="/booking/:id">
     <Booking/>
     </Route>

    </Router>
    </UserContext.Provider>
  );
}

export default App;
