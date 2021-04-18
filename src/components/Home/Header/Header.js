
import React from 'react';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';
import MainHeader from '../MainHeader/MainHeader';
import SimpleSlider from '../SimpleSlider/SimpleSlider';

import TopHeader from '../TopHeader/TopHeader';

const Header = () => {
    return (
        <div>
        {/* <SimpleSlider> </SimpleSlider> */}
        <TopHeader></TopHeader>
        
        <MainHeader></MainHeader>
       
         
        </div>
    );
};

export default Header;