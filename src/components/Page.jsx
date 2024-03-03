import React from "react";

export default function Page({ children }) {
  return (
    <div className="flex flex-1 h-full bg-zinc-900 px-8  items-center flex-col">
      {children}
    </div>
  );
}
