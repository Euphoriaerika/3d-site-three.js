import React from "react";

// About me component page with information about me, my technology stack
const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Bohdan
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Fullstack Web Developer in Ukraine, specializing in creating dynamic
          and user-friendly web applications using HTML, CSS, JavaScript,
          React.js, Three.js, Tailwind CSS. Goal is to deliver high-quality,
          responsive, and scalable solutions to meet client needs.
        </p>
      </div>
      <div className="py-10 flex flex-colw">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap">
          
        </div>
      </div>
    </section>
  );
};

export default About;
