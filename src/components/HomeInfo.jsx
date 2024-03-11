import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";

// Component representing an information box with a link button
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

// Object containing JSX elements for different content stages.
const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Bohdan</span> 👋
      <br />A Full-Stack Web Developer from Ukraine
    </h1>
  ),
  2: (
    <InfoBox
      text="Performed freelance orders and independently developed numerous projects, acquiring significant skills in the process."
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Would you like to learn more about my projects? Here, I present some of them!"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="I am actively seeking new opportunities. If you are interested in collaborating with me, please feel free to contact."
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

// Component to render content based on the current stage.
const HomeInfo = ({ currentStage }) => {
  // Render content based on the provided stage or return null if no content is available.
  return renderContent[currentStage] || null;
};

export default HomeInfo;
