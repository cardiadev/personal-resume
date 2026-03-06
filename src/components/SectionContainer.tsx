"use client";

import { useContext, type ReactNode } from "react";
import { SleekContext } from "../Context";

interface SectionContainerProps {
  name: string;
  children: ReactNode;
}

const SectionContainer = ({ name, children }: SectionContainerProps) => {
  const { nav, animation } = useContext(SleekContext);
  return (
    <div
      id={name}
      className={`sleek_tm_section ${
        name === nav ? `animated active ${animation}` : ""
      }`}
    >
      {children}
    </div>
  );
};
export default SectionContainer;
