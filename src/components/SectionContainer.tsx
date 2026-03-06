"use client";

import { useContext, type ReactNode } from "react";
import { CardiaDevContext } from "../Context";

interface SectionContainerProps {
  name: string;
  children: ReactNode;
}

const SectionContainer = ({ name, children }: SectionContainerProps) => {
  const { nav, animation } = useContext(CardiaDevContext);
  return (
    <div
      id={name}
      className={`cardiadev_tm_section ${
        name === nav ? `animated active ${animation}` : ""
      }`}
    >
      {children}
    </div>
  );
};
export default SectionContainer;
