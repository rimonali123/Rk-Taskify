import React from 'react';
import { NavLink } from 'react-router-dom';
import { CiLogin } from "react-icons/ci";

const Navbar = () => {
    const NavLinks = <>
        <NavLink className={({isActive}) => isActive ? 'text-2xl font-bold text-green-600 underline' : 'text-xl'} to={'/'}><li><a>Home</a></li></NavLink>
        <NavLink className={({isActive}) => isActive ? 'text-2xl font-bold text-green-600 underline' : 'text-xl'} to={'/blogs'}><li><a>Blogs</a></li></NavLink>
        <NavLink className={({isActive}) => isActive ? 'text-2xl font-bold text-green-600 underline' : 'text-xl'} to={'/contactUs'}><li><a>Contact us</a></li></NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {NavLinks}
      </ul>
    </div>
    <a className="text-xl btn btn-ghost">Rk-Taskify</a>
  </div>
  <div className="hidden navbar-center lg:flex">
    <ul className="px-1 menu menu-horizontal">
     {NavLinks}
    </ul>
  </div>
  <div className="navbar-end">
   <button className='flex items-center gap-1 text-base font-medium text-green-600'>Sing In<span className='font-extrabold '><CiLogin /></span></button>
  </div>
</div>
        </div>
    );
};

export default Navbar;