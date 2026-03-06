"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import useClickOutside from "../../useClickOutside";

interface VideoPopupProps {
  close: (val?: boolean) => void;
  videoID: string;
}

const VideoPopup = ({ close, videoID }: VideoPopupProps) => {
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
        <div className="mfp-container popup-container mfp-s-ready mfp-iframe-holder">
          <div className="mfp-content" ref={domNode}>
            <div className="mfp-iframe-scaler">
              <button
                title="Close (Esc)"
                type="button"
                className="mfp-close"
                onClick={() => close()}
              >
                ×
              </button>
              <ReactPlayer src={videoID} playing={true} />
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </>
  );
};

interface AudioPopupProps {
  close: (val?: boolean) => void;
  audioID: string;
}

const AudioPopup = ({ close, audioID }: AudioPopupProps) => {
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
        <div className="mfp-container popup-container mfp-s-ready mfp-iframe-holder">
          <div className="mfp-content" ref={domNode}>
            <div className="mfp-iframe-scaler">
              <button
                title="Close (Esc)"
                type="button"
                className="mfp-close"
                onClick={() => close()}
              >
                ×
              </button>
              <iframe
                src={audioID}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </>
  );
};

const MediaPopup = () => {
  const [videoValue, setVideoValue] = useState<string | null>(null);
  const [audio, setAudio] = useState<string | false>(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const anchors = document.querySelectorAll("a");
      anchors.forEach((a) => {
        if (
          a.href.includes("www.youtube.com") ||
          a.href.includes("vimeo.com") ||
          a.href.includes("soundcloud.com")
        ) {
          a.addEventListener("click", (e) => {
            e.preventDefault();
            if (a.href.includes("soundcloud")) {
              setAudio(a.href);
              setToggle(true);
            } else {
              setVideoValue(a.href);
              setToggle(true);
            }
          });
        }
      });
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {toggle && videoValue && (
        <VideoPopup
          close={() => {
            setToggle(false);
            setVideoValue(null);
          }}
          videoID={videoValue}
        />
      )}
      {toggle && audio && (
        <AudioPopup
          close={() => {
            setToggle(false);
            setAudio(false);
          }}
          audioID={audio as string}
        />
      )}
    </>
  );
};

export default MediaPopup;
