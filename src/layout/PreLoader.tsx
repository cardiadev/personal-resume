"use client";

import { useEffect, useState } from "react";

const PreLoader = () => {
  const [preloaded, setPreloaded] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
      navigator.userAgent
    );

    if (!isMobile) {
      const addClassTimer = setTimeout(() => setPreloaded(true), 800);
      const hideTimer = setTimeout(() => setVisible(false), 2000);
      return () => {
        clearTimeout(addClassTimer);
        clearTimeout(hideTimer);
      };
    } else {
      setVisible(false);
    }
  }, []);

  if (!visible) return null;

  return (
    <div id="preloader" className={preloaded ? "preloaded" : ""}>
      <div className="loader_line" />
    </div>
  );
};
export default PreLoader;
