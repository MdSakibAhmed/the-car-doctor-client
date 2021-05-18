import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';

const Logout = () => {
    const [loggedInUser, setLoggedInUser] =  useContext(UserContext)
    const history = useHistory()
    const handleLogout = () => {
        setLoggedInUser({})
        history.push("")


    }
    return (
        <div>
            {handleLogout()}
        </div>
    );
};

export default Logout;