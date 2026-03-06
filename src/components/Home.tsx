import SectionContainer from "./SectionContainer";
import { socialIcon } from "../socialMedia";

const Home = () => {
  return (
    <SectionContainer name="home">
      <div className="container">
        <div className="tokyo_tm_home w-full min-h-[100vh] clear-both flex items-center justify-center relative">
          <div className="home_content flex items-center">
            <div
              className="avatar min-w-[300px] min-h-[300px] relative rounded-full"
              data-type="wave"
            >
              {" "}
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
                I build bridges between elegant design and powerful technology,
                crafting experiences that feel as good as they look. As a
                Full-Stack Developer shaped by UX/UI sensibilities, I translate
                ideas into intuitive flows, thoughtful interactions, and
                interfaces that invite people in.
              </p>
              <p className="job font-montserrat font-medium max-w-[450px] mb-[25px]">
                My toolkit centers on JavaScript and TypeScript, elevating
                frontends with React and Angular while architecting resilient
                services with Node.js and AWS. I continually expand my
                reach&mdash;experimenting with AI copilots, refining cloud
                workflows, and pairing design thinking with engineering
                rigor&mdash;to deliver products that are both high-performance
                and human-centered.
              </p>
              <div className="social w-full float-left">
                <ul className="m-0 list-none">
                  {socialIcon.map((item) => (
                    <li className="mr-[2px] inline-block" key={item.id}>
                      <a
                        className="text-black text-[40px] transition-all duration-300 hover:text-black"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
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
