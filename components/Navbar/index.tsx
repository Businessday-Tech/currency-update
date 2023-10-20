import React from "react";
import MarketsStrip from "./MarketsStrip";
import NavContent from "./NavContent";

const Navbar = () => {
  return (
    <div className=" bg-white">
      <MarketsStrip />
      <NavContent />
    </div>
  );
};

export default Navbar;
