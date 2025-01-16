import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../../Components/Shared-Components/Header/Navbar';

const Layout = () => {
    return (
        <div className='mx-0 max-w-7xl'>
          <Navbar></Navbar>
            <Outlet></Outlet>
           
        </div>
    );
};

export default Layout;