import { IPostWithImage } from "@/bday";
import { formatDistanceToNowStrict } from "date-fns";
import Image from "next/image";
import React from "react";
interface Props extends IPostWithImage {
  lastBlock?: boolean;
};

export const ThumbnailBlock = ({ withImage,image, lastBlock, title,excerpt,link,date }: Props) => {
  return (
    <div
      className={
        "w-full text-black pb-3 " +
        (!lastBlock ? "border-b border-b-[#E6D9CE] " : "")
      }
    >
      {withImage && (
        <div className=" relative pt-[58%]">
          <Image
            fill
            src={image}
            className=" object-cover"
            alt="image"
          />
          <a href={link} className=" absolute top-0 left-0 w-full h-full"></a>
        </div>
      )}
      <div className="px-4 py-6 lg:p-0 ">
          <h2 className="title text-lg font-semibold my-1"><a href={link} className=" hover:underline hover:text-[#EA0029]">{title}</a></h2>
          {excerpt&&<div className=" mt-3 mb-[22px] text-[#66605C] text-[12px] max-w-xs line-clamp-2 lg:hidden" 
          dangerouslySetInnerHTML={{__html:excerpt}}/>}
        <div className=" mt-3">
        <p className=" text-[#4B5563] text-[10px]">
        { `${ formatDistanceToNowStrict(new Date(date))} Ago`}
        </p>
        </div>
      </div>
    </div>
  );
};
