"use client";

import { SleekContext } from "@/src/Context";
import useClickOutside from "@/src/useClickOutside";
import { useContext, type ReactNode } from "react";

interface ModalContainerProps {
  children: ReactNode;
  nullValue: (val: null) => void;
}

const ModalContainer = ({ children, nullValue }: ModalContainerProps) => {
  const { modalToggle } = useContext(SleekContext);
  const domNode = useClickOutside(() => {
    modalToggle(false);
    nullValue(null);
  });
  return (
    <div className="sleek_tm_modalbox opened">
      <div className="box_inner" ref={domNode}>
        <div className="close">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              modalToggle(false);
              nullValue(null);
            }}
          >
            <i className="icon-cancel" />
          </a>
        </div>
        <div className="description_wrap">{children}</div>
      </div>
    </div>
  );
};
export default ModalContainer;
