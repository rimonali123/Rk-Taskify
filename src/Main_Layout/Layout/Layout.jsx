import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='mx-0 max-w-7xl'>
            this is layout
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;