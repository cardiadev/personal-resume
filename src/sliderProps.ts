import {
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";
import type { SwiperProps } from "swiper/react";

export const sliderProps: { testimonial: SwiperProps } = {
  testimonial: {
    modules: [Autoplay, Pagination, Navigation],
    loop: true,
    spaceBetween: 30,
    speed: 500,
    rewind: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      780: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  },
};
