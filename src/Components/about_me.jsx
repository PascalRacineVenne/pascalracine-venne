import Headshot from "./headshot";
import "./about_me.css";

const AboutMe = () => {
  return (
    <section id="about" className="about__StyledAbout section">
      <h5 className="numbered-heading">About me</h5>
      <div className="inner_about_me">
        <div className="about__StyledText">
          <p>
            I'm an engineering manager with a developer's background. For the
            past few years, I've led product engineering teams on a B2B SaaS
            platform, working closely with Product and with teams across time
            zones.
          </p>
          <p>
            I came to code after more than twenty years as a professional
            drummer and music teacher. I still think about teams the way I think
            about bands: everyone listens, everyone keeps time, and the music
            matters more than any solo.
          </p>
          <p>
            What I care about at work: clear priorities, realistic delivery,
            teams that trust each other, and finding ways for AI to take the
            repetitive work off developers' plates.
          </p>
        </div>
        <div>
          <Headshot />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
