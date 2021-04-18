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
            <div>
              <div className="bg-dark">
                <HeaderNavbar></HeaderNavbar>
              </div>
              <div className="">
                <OrderList></OrderList>
              </div>
            </div>
          </PrivateRoute>
          <Route path="/login">
            <div>
              <div className="bg-dark">
                <HeaderNavbar></HeaderNavbar>
              </div>
              <div className="mt-5">
                <Login></Login>
              </div>
            </div>
          </Route>
          <Route path="/services">
            <div>
              <div className="bg-dark">
                <HeaderNavbar></HeaderNavbar>
              </div>
              <div>
                <Services></Services>
              </div>
            </div>
          </Route>
          <Route path="/addService">
          <div>
              <div className="bg-dark">
                <HeaderNavbar></HeaderNavbar>
              </div>
              <div>
              <AddService></AddService>
              </div>
            </div>
            
          </Route>
          <Route path="/addAdmin">
          <div>
              <div className="bg-dark">
                <HeaderNavbar></HeaderNavbar>
              </div>
              <div>
              <AddAdmin></AddAdmin>
              </div>
            </div>
           
          </Route>
          <Route path="/manageServices">
          <div>
              <div className="bg-dark">
                <HeaderNavbar></HeaderNavbar>
              </div>
              <div>
              <ManageServices></ManageServices>
              </div>
            </div>
            
          </Route>
          <PrivateRoute path="/orderNow/:serviceId">
          <div>
              <div className="bg-dark">
                <HeaderNavbar></HeaderNavbar>
              </div>
              <div >
              <OrderProcess></OrderProcess>
              </div>
            </div>
         
          </PrivateRoute>
          <Route path="/orderList">
          <div>
              <div className="bg-dark">
                <HeaderNavbar></HeaderNavbar>
              </div>
              <div >
              <OrderList></OrderList>
              </div>
            </div>
            
          </Route>
          <Route path="/addReview">
          <div>
              <div className="bg-dark">
                <HeaderNavbar></HeaderNavbar>
              </div>
              <div >
              <Review></Review>
              </div>
            </div>
          
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
