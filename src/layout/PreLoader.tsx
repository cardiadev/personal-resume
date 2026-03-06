"use client";

import { useEffect } from "react";
import { tokyo } from "../utils";

const PreLoader = () => {
  useEffect(() => {
    tokyo.preloader();
  }, []);

  return (
    <div id="preloader">
      <div className="loader_line" />
    </div>
  );
};
export default PreLoader;
