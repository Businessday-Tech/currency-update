import React from "react";
import { Container } from "../Container";
import navigation from "@/utils/navigation";

const Menue = () => {
  return (
    <Container className=" hidden md:block">
      <ul className="flex justify-center text-black py-2 gap-5">
        {navigation.map(({ name, current, href }) => (
          <li
            className={
              "text-[10px] font-semibold cursor-pointer hover:text-[#CC0000]" +
              (current ? " text-[#CC0000]" : "")
            }
            key={name}
          >
            <a href={href}>{name.toUpperCase()}</a>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Menue;
