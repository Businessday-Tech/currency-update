import React from "react";
import { Container } from "../Container";
import navigation from "@/utils/navigation";

const Menue = () => {
  return (
    <Container className=" hidden md:block">
      <ul className="flex text-black py-2 gap-5">
        {navigation.map(({ name, current }) => (
          <li
            className={
              "text-[10px] font-semibold cursor-pointer hover:text-[#CC0000]" +
              (current ? " text-[#CC0000]" : "")
            }
            key={name}
          >
            {name.toUpperCase()}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Menue;
