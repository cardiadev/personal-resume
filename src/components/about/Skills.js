const programming = [
  { id: 1, name: "JavaScript", value: 80 },
  { id: 2, name: "Typescript", value: 70 },
  { id: 2, name: "NodeJS", value: 70 },
  { id: 2, name: "React JS", value: 80 },
  { id: 2, name: "Angular", value: 70 },
  { id: 2, name: "NestJS", value: 70 },
  { id: 2, name: "Loopback", value: 50 },
  { id: 2, name: "Docker", value: 90 },
  { id: 2, name: "SASS", value: 90 },
  { id: 3, name: "GIT", value: 90 },
];
const language = [
  { id: 1, name: "Spanish", value: 100 },
  { id: 2, name: "English", value: 70 },
];
const softskills = [
  { id: 1, name: "Communication", value: 100 },
  { id: 2, name: "Problem-Solving", value: 80 },
  { id: 3, name: "Critical Thinking", value: 85 },
  { id: 4, name: "Creativity", value: 90 },
  { id: 5, name: "Teamwork", value: 80 },
  { id: 6, name: "Resilient", value: 80 },
  { id: 7, name: "Decision-Making", value: 75 },
];
const Skills = () => {
  return (
    <div className="tokyo_tm_progressbox w-full h-auto clear-both float-left bg-white pt-[93px] pr-[0px] pb-[100px] pl-[0px]">
      <div className="container">
        <div className="in w-full h-auto clear-both float-left flex">
          <div className="left w-1/2 pr-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Programming Skills</h3>
            </div>
            <div className="tokyo_progress">
              {programming.map((skill) => (
                <div className="progress_inner" key={skill.id}>
                  <span>
                    <span className="label">{skill.name}</span>
                    <span className="number">{skill.value}%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div
                        className="bar_in"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="right w-1/2 pl-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Language Skills</h3>
            </div>
            <div className="tokyo_progress">
              {language.map((skill) => (
                <div className="progress_inner" key={skill.id}>
                  <span>
                    <span className="label">{skill.name}</span>
                    <span className="number">{skill.value}%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div
                        className="bar_in"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="tokyo_section_title w-full h-auto clear-both float-left mt-[45px]">
              <h3 className="text-[20px] font-bold">Soft Skills</h3>
            </div>
            <div className="tokyo_progress">
              {softskills.map((skill) => (
                <div className="progress_inner" key={skill.id}>
                  <span>
                    <span className="label">{skill.name}</span>
                    <span className="number">{skill.value}%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div
                        className="bar_in"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
