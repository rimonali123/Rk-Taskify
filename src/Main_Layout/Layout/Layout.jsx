import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../../Components/Shared-Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <div className='mx-0 max-w-7xl'>
                <Navbar></Navbar>
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;