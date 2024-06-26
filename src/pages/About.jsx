import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import CTA from "../components/CTA";

import { experiences, skills } from "../constants";

// About me component page with information about me, my technology stack
const About = () => {
  return (
    <section className="max-container flex flex-col">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="green-gradient_text font-semibold drop-shadow">
          Bohdan
        </span>
      </h1>
      <div className="mt-5 flex-grow flex flex-col gap-3 text-slate-500">
        <p>
          Full-stack web developer from Ukraine, specializing in creating
          dynamic and user-friendly web applications. My main goal is to become
          a professional who pays special attention to the creation of
          high-quality, user-oriented products.
        </p>
      </div>
      <div className="py-10 flex-grow flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex-grow flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div key={index} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl"></div>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16 flex-grow ">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex-grow flex flex-col gap-3 text-slate-500">
          <p>
            Unfortunately, I don't have experience working in a company, but I
            have consistently improved my skills by taking on freelance orders
            and participating in hackathons. Also, I'm taking courses such as
            freeСodeСamp, constantly practicing on CodeWars, taking part in game
            jams, and have several academic papers on frontend development as a
            student at Khai.
          </p>
        </div>
        <div className="mt-12 flex-grow ">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.event_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.event_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{
                  background: experience.iconBg,
                }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <h3 className="text-black text-xl font-poppins font-semibold">
                  {experience.title}
                </h3>
                <p
                  className="text-black-500 font-medium font-base"
                  style={{ margin: 0 }}
                >
                  {experience.event_name}
                </p>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
