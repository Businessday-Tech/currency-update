import React from "react";
import NavContent from "./NavContent";
// import Strips from "./Strips";
import AbokiWidget from "./AbokiWidget";

const Navbar = () => {
  return (
    <div className=" bg-white">
      <AbokiWidget />
      <NavContent />
    </div>
  );
};

export default Navbar;
