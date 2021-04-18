import React from 'react';
import { Link } from 'react-router-dom';
import OrderList from '../OrderList/OrderList';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className='row overflow-hidden'>
        <div className="col-md-2">
            <Sidebar></Sidebar>
        </div>
        <div className="col-md-7 mt-4">
            <OrderList></OrderList>
        </div>
        

        
            
        </div>
    );
};

export default Dashboard;