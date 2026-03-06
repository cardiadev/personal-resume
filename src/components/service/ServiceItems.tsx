"use client";

import { CardiaDevContext, type ServiceModalData } from "@/src/Context";
import { useContext } from "react";

const services: ServiceModalData[] = [
  {
    id: 1,
    name: "Web Design",
    text: [
      "CardiaDev delivers web design and frontend engineering focused on clarity, conversion, and a strong product experience that reflects your brand.",
      "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
      "That is why teams invest in a tailored website experience built around performance, UX, and maintainable code that can scale with the business.",
    ],
    image: "assets/img/news/1.jpg",
  },
  {
    id: 2,
    name: "Content Writing",
    text: [
      "CardiaDev shapes content with product intent, making sure copy supports navigation, explains value clearly, and helps people move through the experience.",
      "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
      "Strong messaging aligns product, interface, and brand voice so each section communicates with purpose instead of filling space.",
    ],
    image: "assets/img/news/2.jpg",
  },
  {
    id: 3,
    name: "Brand Identity",
    text: [
      "CardiaDev helps translate product positioning into a sharper digital identity through typography, visual structure, and consistent interface decisions.",
      "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
      "A brand becomes more credible when the product experience, visual system, and communication all reinforce the same story.",
    ],
    image: "assets/img/news/3.jpg",
  },
  {
    id: 4,
    name: "Live Chat",
    text: [
      "CardiaDev integrates real-time support experiences that feel native to the product instead of bolted on as an afterthought.",
      "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
      "Done well, support UI reduces friction, improves trust, and gives users a fast path to resolve questions without leaving the flow.",
    ],
    image: "assets/img/news/4.jpg",
  },
  {
    id: 5,
    name: "After Effects",
    text: [
      "CardiaDev uses motion intentionally to support storytelling, highlight hierarchy, and make interactions feel more polished and alive.",
      "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
      "Motion should add clarity and personality, not distraction, especially in product-focused interfaces and portfolio presentation.",
    ],
    image: "assets/img/news/1.jpg",
  },
  {
    id: 6,
    name: "Mobile App",
    text: [
      "CardiaDev designs mobile experiences that prioritize usability, speed, and clear flows so people can complete tasks without friction.",
      "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
      "Responsive thinking, interface consistency, and performance matter even more on smaller screens where every decision is amplified.",
    ],
    image: "assets/img/news/2.jpg",
  },
];

const ServiceItems = () => {
  const { setServiceModal, modalToggle } = useContext(CardiaDevContext);
  return (
    <div className="list w-full h-auto clear-both float-left">
      <ul className="ml-[-40px] list-none flex flex-wrap">
        {services.map((service) => (
          <li className="mb-[40px] w-1/3 pl-[40px]" key={service.id}>
            <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pt-[45px] pr-[30px] pb-[40px] pl-[30px] transition-all duration-300">
              <span className="number inline-block mb-[25px] relative w-[60px] h-[60px] leading-[60px] text-center rounded-full bg-[rgba(0,0,0,.03)] font-bold text-black font-montserrat transition-all duration-300">
                {service.id <= 9 ? `0${service.id}` : service.id}
              </span>
              <h3 className="title font-bold text-black text-[18px] mb-[15px]">
                {service.name}
              </h3>
              <p className="text">{service.text[0].slice(0, 70)}...</p>
              <div className="cardiadev_tm_read_more">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setServiceModal(service);
                  }}
                >
                  <span>Read More</span>
                </a>
              </div>
              <a
                className="cardiadev_tm_full_link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  modalToggle(true);
                  setServiceModal(service);
                }}
              />
              <img
                className="popup_service_image opacity-0 invisible hidden absolute z-[-111]"
                src={service.image}
                alt="image"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ServiceItems;
