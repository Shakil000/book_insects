import React from "react";
import { NavLink } from "react-router-dom";
import { BsMenuButtonWide } from "react-icons/bs";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="listedBooks">Listed Books</NavLink>
      </li>
      <li>
        <NavLink to="pageRead">Pages to Read</NavLink>
      </li>
    </>
  );

  return (
        <div className="mb-10">
        <div className="lg:flex lg:justify-between lg:items-center mt-3 bg-blend-saturation">
      <div className="flex justify-between mt-3 items-center mx-2">
      <div>
            <h1 className="lg:text-4xl font-bold">Book Insects</h1>
          </div>
            <div>
            <NavLink><BsMenuButtonWide className="lg:hidden block" /></NavLink>
            </div>
      </div>
          
          <div>
            <ul className="lg:flex gap-5 hidden">{links}</ul>
          </div>

          <div className="lg:flex gap-5 hidden">
            <button className="btn text-white font-bold bg-[#23BE0A]">Sign In</button>
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
