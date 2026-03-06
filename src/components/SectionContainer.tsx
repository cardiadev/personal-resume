"use client";

import { useContext, type ReactNode } from "react";
import { TokyoContext } from "../Context";

interface SectionContainerProps {
  name: string;
  children: ReactNode;
}

const SectionContainer = ({ name, children }: SectionContainerProps) => {
  const { nav, animation } = useContext(TokyoContext);
  return (
    <div
      id={name}
      className={`tokyo_tm_section ${
        name === nav ? `animated active ${animation}` : ""
      }`}
    >
      {children}
    </div>
  );
};
export default SectionContainer;
