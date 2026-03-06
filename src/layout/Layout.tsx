"use client";

import { SleekContext } from "@/src/Context";
import DetailsModal from "@/src/components/popup/DetailsModal";
import Cursor from "@/src/layout/Cursor";
import Mobile from "@/src/layout/Mobile";
import Sidebar from "@/src/layout/Sidebar";
import { sleekUi } from "@/src/utils";
import ImageView from "@/src/components/popup/ImageView";
import MediaPopup from "@/src/components/popup/MediaPopup";
import NewsModal from "@/src/components/popup/NewsModal";
import ServiceModal from "@/src/components/popup/ServiceModal";
import { type ReactNode, useContext, useEffect } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    sleekUi.customCursor();
  }, []);
  const { modal, serviceModal, newsModal, portfolioDetailsModal } =
    useContext(SleekContext);
  return (
    <>
      <MediaPopup />
      <ImageView />
      {modal && serviceModal && <ServiceModal />}
      {modal && newsModal && <NewsModal />}
      {modal && portfolioDetailsModal && <DetailsModal />}
      {/* WRAPPER ALL */}
      <div className="sleek_tm_all_wrap">
        {/* MOBILE MENU */}
        <Mobile />
        {/* /MOBILE MENU */}
        {/* LEFTPART */}
        <Sidebar />
        {/* /LEFTPART */}
        {/* RIGHTPART */}
        <div className="rightpart w-full min-h-[100vh] float-left relative bg-[#f8f8f8]">
          <div className="rightpart_in relative w-full float-left clear-both border-solid border-[#ebebeb] border-l min-h-[100vh]">
            {children}
          </div>
        </div>
        {/* /RIGHTPART */}
        {/* CURSOR */}
        <Cursor />
        {/* /CURSOR */}
      </div>
    </>
  );
};
export default Layout;
