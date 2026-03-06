"use client";

import Isotope from "isotope-layout";
import { useContext, useEffect, useRef, useState } from "react";
import { TokyoContext, type PortfolioDetailsModalData } from "../Context";
import { tokyo } from "../utils";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";

const detailData: PortfolioDetailsModalData[] = [
  {
    id: 1,
    thumbnail: "assets/img/portfolio/7.jpg",
    title: "Grand Velas | 360 VR",
    text: [
      "We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible. Building mockups strikes the ideal balance between true-life representation of the end product and ease of modification.",
      "Mockups are useful both for the creative phase of the project - for instance when you're trying to figure out your user flows or the proper visual hierarchy - and the production phase when they will represent the target product. Making mockups a part of your creative and development process allows you to quickly and easily ideate.",
    ],
    client: "Grand Velas Rivera Maya",
    date: "December 13, 2011",
    category: "Detail",
    share: [
      {
        id: 1,
        iconName: "icon-facebook-squared",
        link: "https://www.facebook.com/",
      },
      {
        id: 2,
        iconName: "icon-twitter-squared",
        link: "https://twitter.com/",
      },
      {
        id: 3,
        iconName: "icon-behance-squared",
        link: "https://www.behance.net/",
      },
      {
        id: 4,
        iconName: "icon-linkedin-squared",
        link: "https://www.linkedin.com/",
      },
    ],
    bigImage: "assets/img/portfolio/1.jpg",
    images: ["assets/img/portfolio/2.jpg", "assets/img/portfolio/3.jpg"],
  },
  {
    id: 2,
    thumbnail: "assets/img/portfolio/8.jpg",
    title: "Ave Simone",
    text: [
      "We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible. Building mockups strikes the ideal balance between true-life representation of the end product and ease of modification.",
      "Mockups are useful both for the creative phase of the project - for instance when you're trying to figure out your user flows or the proper visual hierarchy - and the production phase when they will represent the target product. Making mockups a part of your creative and development process allows you to quickly and easily ideate.",
    ],
    client: "Alvaro Morata",
    date: "October 22, 2022",
    category: "Detail",
    share: [
      {
        id: 1,
        iconName: "icon-facebook-squared",
        link: "https://www.facebook.com/",
      },
      {
        id: 2,
        iconName: "icon-twitter-squared",
        link: "https://twitter.com/",
      },
      {
        id: 3,
        iconName: "icon-behance-squared",
        link: "https://www.behance.net/",
      },
      {
        id: 4,
        iconName: "icon-linkedin-squared",
        link: "https://www.linkedin.com/",
      },
    ],
    bigImage: "assets/img/portfolio/1.jpg",
    images: ["assets/img/portfolio/2.jpg", "assets/img/portfolio/3.jpg"],
  },
];

const Portfolio = () => {
  const isotope = useRef<any>(null);
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    const data = document.querySelector(".item__");
    if (data) {
      setTimeout(() => {
        isotope.current = new Isotope(".gallery_zoom", {
          itemSelector: ".item__",
        });
      }, 3000);
    }
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: "*" })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key: string) => () => {
    setFilterKey(key);
  };
  useEffect(() => {
    tokyo.portfolioHover();
    tokyo.dataImage();
  });
  const { setPortfolioDetailsModal, modalToggle } = useContext(TokyoContext);
  return (
    <SectionContainer name="portfolio">
      <div className="container">
        <div className="tokyo_tm_portfolio w-full h-auto clear-both float-left px-0 pt-[100px] pb-[40px]">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle
                pageName="Portfolio"
                title="Creative Portfolio"
              />
              <div className="portfolio_filter">
                <ul className="list-none">
                  <li className="mr-[25px] inline-block">
                    <a
                      href="#"
                      className="current text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      onClick={handleFilterKeyChange("*")}
                    >
                      All
                    </a>
                  </li>
                  <li className="mr-[25px] inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("vimeo")}
                    >
                      Vimeo
                    </a>
                  </li>
                  <li className="mr-[25px] inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("youtube")}
                    >
                      Youtube
                    </a>
                  </li>
                  <li className="mr-[25px] inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("soundcloud")}
                    >
                      Soundcloud
                    </a>
                  </li>
                  <li className="mr-[25px] inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("image")}
                    >
                      Image
                    </a>
                  </li>
                  <li className="inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("detail")}
                    >
                      Detail
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="list_wrapper w-full h-auto clear-both float-left">
            <ul className="portfolio_list gallery_zoom ml-[-40px] list-none">
              <li className="vimeo mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Punta de Mita"
                    data-category="Vimeo"
                  >
                    <a
                      className="popup-vimeo"
                      href="https://vimeo.com/512885700"
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/5.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="detail mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title={detailData[0].client}
                    data-category="Detail"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setPortfolioDetailsModal(detailData[0]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/7.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Portfolio;
