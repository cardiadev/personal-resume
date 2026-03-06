import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import FunFact from "./service/FunFact";
import Partners from "./service/Partners";
import ServiceItems from "./service/ServiceItems";

const Services = () => {
  return (
    <SectionContainer name="service">
      <div className="container">
        <div className="tokyo_tm_services w-full h-auto clear-both float-left py-[100px] px-0">
          <h2 className="mb-[62px] uppercase font-extrabold font-montserrat">
            Under Construction
          </h2>
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle pageName="Services" title="What I Do" />
            </div>
          </div>
          <ServiceItems />
        </div>
      </div>
      <Partners />
      <FunFact />
    </SectionContainer>
  );
};
export default Services;
