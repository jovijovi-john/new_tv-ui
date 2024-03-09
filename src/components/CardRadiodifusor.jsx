import React from "react";

import { emissoras } from "../configs/emissoras";

export default function CardRadiodifusor({ createReference, classNames }) {
  return (
    <div
      className={`flex  items-center flex-col gap-10 rounded-xl max-w-sm ${classNames}`}
      tabIndex={0}
      ref={(el) => createReference(el)}
    >
      <img src={emissoras.tvufma.icon} alt="" className="w-2/3 rounded-full " />
      <p className="text-5xl font-bold text-gray-200">
        {emissoras.tvufma.name}
      </p>
      <p className="text-2xl text-gray-400">{emissoras.tvufma.slogan}</p>
    </div>
  );
}
