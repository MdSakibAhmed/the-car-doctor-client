import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import AddService from "./components/Dashboard/AddService/AddService";
import AddAdmin from "./components/Dashboard/AddAdmin/AddAdmin";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import ManageServices from "./components/Dashboard/ManageServices/ManageServices";
import OrderProcess from "./components/OrderProcess/OrderProcess/OrderProcess";
import OrderList from "./components/Dashboard/OrderList/OrderList";
import Review from "./components/Review/Review/Review";
import Sidebar from "./components/Dashboard/Sidebar/Sidebar";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivatRoute/PrivateRoute";
import Services from "./components/Home/Services/Services";
import HeaderNavbar from "./components/Home/HeaderNavbar/HeaderNavbar";
import Logout from "./components/Logout/Logout";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/dashboard">
            
                <OrderList></OrderList>
            
          </PrivateRoute>
          <Route path="/login">
          <Login/>
          </Route>
          <Route path="/services">
                <Services></Services>      
          </Route>
          <Route path="/addService">
                <AddService></AddService>     
          </Route>
          <Route path="/addAdmin">
                <AddAdmin></AddAdmin>
          </Route>
          <Route path="/manageServices">
        
                <ManageServices></ManageServices>
            
          </Route>
          <PrivateRoute path="/orderNow/:serviceId">
          
                <OrderProcess></OrderProcess>
          
          </PrivateRoute>
          <Route path="/orderList">
            
                <OrderList></OrderList>
             
          </Route>
          <Route path="/addReview">
            
                <Review></Review>
             
          </Route>
          <Route path="/logout">
            <Logout></Logout>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
