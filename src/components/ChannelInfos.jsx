import React from "react";

import { emissoras } from "../configs/emissoras";

export default function ChannelInfos({ createReference }) {
  return (
    <div
      className=" flex  items-center justify-center flex-col gap-10 rounded-xl"
      tabIndex={0}
      ref={(el) => createReference(el)}
    >
      <img src={emissoras.tvUFMA.icon} alt="" className="w-2/3 rounded-full " />
      <p className="text-5xl font-bold text-gray-200">
        {emissoras.tvUFMA.name}
      </p>
      <p className="text-2xl text-gray-400">{emissoras.tvUFMA.slogan}</p>
    </div>
  );
}
