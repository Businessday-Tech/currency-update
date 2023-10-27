"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { Container } from "../Container";
import { ISymbolData } from "@/bday";

interface Props{
  tickers:{
  top:ISymbolData[],
  bottom:ISymbolData[],    
  }
}


const MarketsStrip = ({tickers}:Props) => {
  return (
    <div className=" bg-black w-full py-[10px]  text-white">
      <Container className=" flex gap-5">
        <div className="flex-1 items-center !overflow-hidden">
          <Marquee>
          <span className=" text-[11px] ml-16 font-bold">TOP GAINERS&nbsp;&nbsp;:</span>
            {tickers.top.map((stock, idx) => (
              <span key={idx} className=" text-[11px] ml-16">
                {stock.SYMBOL} &nbsp;
                <span
                  className={
                    " border border-[#9CD321] text-[#9CD321] p-[2px] rounded-[3px] " +
                    (stock.PERCENTAGE_CHANGE <= 0 && " border-[#FF767C] text-[#FF767C]")
                  }
                >
                 {!(stock.PERCENTAGE_CHANGE <= 0)&&"+"}{stock.PERCENTAGE_CHANGE}
                </span>
              </span>
            ))}
          <span className=" text-[11px] ml-16 font-bold">TOP LOSERS&nbsp;&nbsp;:</span>
            {tickers.bottom.map((stock, idx) => (
              <span key={idx} className=" text-[11px] ml-16">
                {stock.SYMBOL} &nbsp;
                <span
                  className={
                    " border border-[#9CD321] text-[#9CD321] p-[2px] rounded-[3px] " +
                    (stock.PERCENTAGE_CHANGE <= 0 && " border-[#FF767C] text-[#FF767C]")
                  }
                >
                 {!(stock.PERCENTAGE_CHANGE <= 0)&&"+"}{stock.PERCENTAGE_CHANGE}
                </span>
              </span>
            ))}
          </Marquee>
        </div>
        <div className=" lg:w-[20%] hidden sm:block text-right">
          <a
            href="https://businessday.ng/category/markets/"
            className=" visited:text-white hover:underline text-[11px]"
          >
            NGX Markets Update
          </a>
        </div>
      </Container>
    </div>
  );
};

export default MarketsStrip;
