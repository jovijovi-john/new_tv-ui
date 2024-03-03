import React from "react";
import ScaleFocusHover from "./ScaleFocusHover"

export default function IconLeftTextRight({ children, createReference, onClick = () => { } }) {
  return (
    <ScaleFocusHover
      createReference={createReference}
      onClick={onClick}
      classNames={"flex gap-4 items-center text-white text-2xl p-4 rounded-lg leading-10"}
    >
      {children}
    </ScaleFocusHover>
  );
}
