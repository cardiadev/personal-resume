// Swiper modules are now imported from swiper/modules in v11
import {
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  Mousewheel,
  Navigation,
  Pagination,
  Virtual,
} from "swiper/modules";

export const sliderProps = {
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
