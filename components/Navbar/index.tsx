import React from "react";
import NavContent from "./NavContent";
import Strips from "./Strips";

const Navbar = () => {
  return (
    <div className=" bg-white">
      <Strips/>
      <NavContent />
    </div>
  );
};

export default Navbar;
