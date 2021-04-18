import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css'

const Sidebar = ({serviceId}) => {
    const [isAdmin, setAdmin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch("https://infinite-shelf-48964.herokuapp.com/isAdmin", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ email: loggedInUser.email }),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            result && setAdmin(true);
          });
      }, []);
    return (
        <div  style={{height:"100vh",background:"black",paddingTop:"15px"}}>
        <h4 className='text-center text-white mb-3'>The Car Doctor</h4>

        <ul className='p-0 list-unstyled text-center'>
        
        
        {!isAdmin  &&<li className="mb-3 admin-panel"> <Link className='text-white text-decoration-none' to={`/orderNow/${serviceId}`}>Book</Link></li> }
        
            <li className="mb-3 admin-panel"> <Link className='text-white text-decoration-none' to='/orderList'>{isAdmin?'Order List':'Book List'}</Link></li>
            {!isAdmin  && <li className="mb-3 admin-panel"> <Link className='text-white text-decoration-none' to='/addReview'>Review</Link></li>}

            {isAdmin && <> <li className="mb-3 admin-panel"><Link className='text-white text-decoration-none' to='/addService'>Add Service</Link></li>
            <li className="mb-3 admin-panel"><Link className='text-white text-decoration-none' to='/addAdmin'>Make Admin</Link></li>
            <li className="mb-3 admin-panel"><Link className='text-white text-decoration-none' to='/manageServices'>Manage Services</Link></li></>}
           
            
        </ul>
            
        </div>
    );
};

export default Sidebar;
