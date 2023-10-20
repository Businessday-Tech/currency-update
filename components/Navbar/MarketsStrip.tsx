"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { Container } from "../Container";

const MarketsStrip = () => {
  return (
    <div className=" bg-black w-full py-[10px]  text-white">
      <Container className=" flex gap-5">
        <div className="flex-1 items-center !overflow-hidden">
          <Marquee>
            {[
              "S&P 500",
              "Shanghai",
              "FTSE 100",
              "Euro/Dollar",
              "Brent Crude Oil",
              "10 Year US Gov",
            ].map((stock, idx) => (
              <span key={idx} className=" text-[11px] ml-16">
                {stock} &nbsp;
                <span
                  className={
                    " border border-[#9CD321] text-[#9CD321] p-[2px] rounded-[3px] " +
                    (idx % 2 && " border-[#FF767C] text-[#FF767C]")
                  }
                >
                  +1.51%
                </span>
              </span>
            ))}
          </Marquee>
        </div>
        <div className=" lg:w-[20%] hidden sm:block text-right">
          <a
            href="#"
            className=" visited:text-white hover:underline text-[11px]"
          >
            Visit Markets Data
          </a>
        </div>
      </Container>
    </div>
  );
};

export default MarketsStrip;
