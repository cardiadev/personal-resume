"use client";

import { useEffect, useState } from "react";
import useClickOutside from "../../useClickOutside";

interface ImgViewsProps {
  close: (val: boolean) => void;
  src: string;
}

const ImgViews = ({ close, src }: ImgViewsProps) => {
  const domNode = useClickOutside(() => {
    close(false);
  });
  return (
    <>
      <div className="mfp-bg mfp-ready" onClick={() => close(false)} />
      <div
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{ overflow: "hidden auto" }}
      >
        <div className="popup-container mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container">
          <div className="mfp-content" ref={domNode}>
            <div className="mfp-iframe-scaler">
              <img className="mfp-img" src={src} alt="Portfolio image preview" />
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </>
  );
};

const ImageView = () => {
  const [img, setImg] = useState(false);
  const [imgValue, setImgValue] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const anchors = document.querySelectorAll("a");
      anchors.forEach((a) => {
        if (a.href.includes("assets/img/")) {
          if (a.getAttribute("download") === null) {
            a.addEventListener("click", (e) => {
              e.preventDefault();
              setImgValue(a.href);
              setImg(true);
            });
          }
        }
      });
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {img && imgValue && (
        <ImgViews close={() => setImg(false)} src={imgValue} />
      )}
    </>
  );
};
export default ImageView;
