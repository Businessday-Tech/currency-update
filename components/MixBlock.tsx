import { IPostWithImage } from "@/bday";
import { ThumbnailBlock } from "./ThumbnailBlock";
import React from "react";


interface Props {
  title?: string;
  separator?: boolean;
  mobile?: boolean;
  data: (IPostWithImage)[]
}
const MixBlock = ({ title, separator,mobile,data }: Props) => {
  return (
    <div className={(" lg:px-1" )+ (separator ? " border-l border-l-[#EA0029] " : "")}>
      {title && (
        <h6 className={`font-semibold text-center md:text-left ${mobile?" mb-[6px] text-lg font-bold":" text-[#EA0029]"}  text-[10px] mb-4`}>
          {title}
        </h6>
      )}
      {data.map(({withImage,...articule}, index) => (
        <ThumbnailBlock
          key={index}
          {...articule}
          withImage={mobile&&(index === 0) }
          lastBlock={index===(data.length-1)} />
      ))}
    </div>
  );
};

export default MixBlock;
