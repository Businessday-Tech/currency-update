"use client";
import React, { Fragment, useState } from "react";
import { Container } from "../Container";
import SvgIconStyle from "../SvgIconStyle";
import Image from "next/image";
import Menue from "./Menue";
import Link from "next/link";
import MobileMenue from "./MobileMenue";

const NavContent = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" bg-[#F5F5F5]">
      <div className="flex border-b border-b-[rgba(234,0,41,0.1)] py-[6px] md:hidden">
        <div className=" flex-1 border-r border-r-[rgba(234,0,41,0.1)] text-right  pr-[13px]">
          <Link
            href={"/login"}
            className=" text-[11px] py-2 hover:font-semibold"
          >
            Sign In
          </Link>
        </div>
        <div className=" flex-1 text-left pl-[13px]">
          <Link
            href={"/subscribe"}
            className=" text-[11px] py-2 hover:font-semibold"
          >
            Subscribe
          </Link>
        </div>
      </div>
      <div className=" border-b border-b-[#CCC1B7]">
        <Container className=" flex justify-between py-5">
          <div className=" flex items-center justify-between w-[10%]">
            <SvgIconStyle
              onClick={() => setOpen(true)}
              className=" w-[15px] h-[20px] scale-125 text-black hover:cursor-pointer"
              src="/icons/bcrumb.svg"
            />
            <SvgIconStyle
              className=" w-[20px] h-[20px] hidden md:block text-black hover:cursor-pointer"
              src="/icons/searchIcon.svg"
            />
          </div>
          <div>
            <Image
              src={"/images/logo.png"}
              width={377}
              height={65}
              alt="logo"
            />
          </div>
          <div className=" w-[15%] flex justify-end items-center">
            <div className="text-[11px] hidden md:block">
              <button className=" px-[9px] py-[7px] text-white bg-[#EA0029]">
                Subscribe
              </button>
              {/* <a href="#" className="pl-[20px] text-[#33302E]">
                Sign in
              </a> */}
            </div>
          </div>
        </Container>
      </div>
      <Menue />
      <MobileMenue setOpen={setOpen} open={open} />
    </div>
  );
};

export default NavContent;
