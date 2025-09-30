import SectionContainer from "./SectionContainer";
import { socialIcon } from "../socialMedia"

const Home = () => {
  return (
    <SectionContainer name={"home"}>
      <div className="container">
        <div className="tokyo_tm_home w-full min-h-[100vh] clear-both flex items-center justify-center relative">
          <div className="home_content flex items-center">
            <div
              className="avatar min-w-[300px] min-h-[300px] relative rounded-full"
              data-type="wave"
            >
              {" "}
              {/* data-type values are: "wave", "circle", "square"*/}
              <div
                className="image absolute inset-0 bg-no-repeat bg-center bg-cover"
                data-img-url="assets/img/slider/me_03.jpg"
              />
            </div>
            <div className="details ml-[80px]">
              <h3 className="name text-[55px] font-normal uppercase mb-[14px]">
                Carlos <span className="font-extrabold">Diaz</span>
              </h3>
              <p className="job font-montserrat font-medium max-w-[450px] mb-[25px]">
              As a Full-stack JS Developer and UX Engineer, I harness JavaScript, React, Angular, Node.js, and Flutter to build engaging, user-centric web and mobile applications. With a background in Multimedia Communication Engineering, I blend technical skill with design insight to create digital experiences that are not only functional but also intuitive and visually appealing. Let&apos;s make technology work for us, creating solutions that are both innovative and accessible.
              </p>
              <div className="social w-full float-left">
                <ul className="m-0 list-none">
                  {socialIcon.map((item) => (
                    <li className="mr-[2px] inline-block" key={item.id}>
                      <a
                        className="text-black text-[40px] transition-all duration-300 hover:text-black"
                        href={item.link}
                        target="_blank"
                      >
                        <i className={item.iconName} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Home;
