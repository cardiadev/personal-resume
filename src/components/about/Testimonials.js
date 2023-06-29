import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../../sliderProps";
const testimonialData = [
  {
    id: 1,
    text: "Carlos is undoubtedly an enthusiast of cutting-edge technologies, with great skills in Frontend, UX and multimedia development. Since I met him at college, he has always kept up to date with current trends.",
    authorImage: "assets/img/testimonials/1.jpg",
    authorName: "Carlos Rodriguez",
    authorDesignation: "User Experience Designer at Sunrise UPC GmbH",
  },
  {
    id: 2,
    text: "I recommend to Carlos in all professional senses as a high committed person to fullfill responsibilities with enough skills to perform and develop projects and generate creative alternatives to solve problems.",
    authorImage: "assets/img/testimonials/2.jpg",
    authorName: "José Arturo Martínez Pérez",
    authorDesignation: "Quality Engineer at HELLA",
  },
  {
    id: 3,
    text: "Carlos is a very long time friend, know him from his very detailed work and mostly interested in current technologies and keeping up to date to what's happening in Tech industries.",
    authorImage: "assets/img/testimonials/3.jpg",
    authorName: "Alejandro Magaña",
    authorDesignation: "Quality Assurance Specialist at Placeit",
  },
];
const Testimonials = () => {
  return (
    <div className="tokyo_tm_testimonials w-full h-auto clear-both float-left py-[100px] px-0">
      <div className="container">
        <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
          <h3 className="text-[20px] font-bold">Testimonials</h3>
        </div>
        <div className="list w-full h-auto clear-both float-left overflow-hidden">
          <Swiper
            {...sliderProps.testimonial}
            className="m-0 list-none cursor-e-resize"
          >
            {testimonialData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="list_inner w-full h-auto clear-both float-left relative">
                  <div className="text w-full h-auto clear-both float-left border-solid border-[#E5EDF4] border-2 p-[40px] mb-[30px] relative">
                    <p>{item.text}</p>
                  </div>
                  <div className="details w-full h-auto clear-both float-left flex items-center pl-[20px]">
                    <div className="image relative w-[60px] h-[60px]">
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                        data-img-url={item.authorImage}
                        style={{ backgroundImage: `url(${item.authorImage})` }}
                      />
                    </div>
                    <div className="info pl-[20px]">
                      <h3 className="text-[16px] mb-[2px] font-semibold">
                        {item.authorName}
                      </h3>
                      <span className="text-[14px]">
                        {item.authorDesignation}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
