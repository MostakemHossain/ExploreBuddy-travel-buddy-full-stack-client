import { useState } from "react";
import { FaRegFileWord, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Navbar = () => {
  const [searchBoxVisibility,setsearchBoxVisibility]=useState(false);
  return (
    <nav className="navbar ">
      <Link to="/" className="flex-none w-16 mb-12 md:mb-0 relative z-10">
        <img className="w-full" src={logo} alt="" />
      </Link>
      <div className={"absolute bg-white w-full left-0 z-1 border-b border-gray px-[5vw]  mt-16 md:mt-2 md:border-0 md:block md:relative md:inset-0 md:show md:p-0 " + (searchBoxVisibility? "show":"hide")}>
        <input className=
        "w-full md:w-auto bg-gray p-4 pl-16 pr-[12%] md:pr-6 rounded-full placeholder:text-dark-grey" type="text" placeholder="Search" name="" id="" />
        <FaSearch className="absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 md:top-[28px] -translate-y-1/2 text-2xl text-dark-grey" />
        
      </div>
      <div className="flex items-center gap-3 md:gap-6 ml-auto ">
        <button className="md:hidden w-6 h-6 bg-gray rounded-full flex items-center justify-center "
        onClick={()=>setsearchBoxVisibility((currentVal)=>!currentVal)}
        >
          <FaSearch className="" />
        </button>
        <Link to="/editor" className="hidden md:flex gap-2 link items-center justify-center link">
          <FaRegFileWord/>
          <p>Write</p>
        </Link>
        <Link to="/signin" className="btn-dark py-2">
        Sign In
        
        </Link>
        <Link to="/signup" className="btn-light py-2 hidden md:block">
        Sign Up
        
        </Link>


      </div>
    </nav>
  );
}

export default Navbar;
