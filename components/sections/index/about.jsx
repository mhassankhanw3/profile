// Core packages
import Image from "next/image";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Section specific blocks
import BadgesBlock from "../../blocks/about.badges.block";
import CopyBlock from "../../blocks/about.copy.block";

// Section scss
import about from "../../../styles/sections/index/about.module.scss";

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 *
 * @returns {jsx} <About />
 */
export default function About() {
  return (
    <Section classProp={about.section}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="About Me"
          preTitle="Synopsis"
          subTitle="Passionate React developer crafting seamless experiences, transforming ideas into impactful solutions. Explore my journey and innovation in frontend development."
        />
        <section className={about.content}>
          <div className={about.image}>
            <img src="/img/profile.png" alt="Hassan's photo" />
            {/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
          </div>
          <div className={about.copy}>
            <CopyBlock
              title="Versatile Skills Beyond Code"
              containerClass={about.container}
              iconClass={about.icon}
              icon={["fat", "ear-listen"]}
              copy="In addition to my expertise in React development, I bring strong communication, adaptability, and problem-solving skills. Balancing roles as a developer, collaborator, and continuous learner, I draw inspiration from diverse experiences. Outside of coding, I find joy in various hobbies and bring a well-rounded approach to every project."
            />
            <BadgesBlock
              title="Strategic Insight in Development"
              containerClass={about.container}
              list={methods}
              fullContainer="fullContainer"
              block="methods"
              icon="fingerprint"
              copy="Thriving on strategic planning, I sculpt project architectures from user insights to efficient operations. My expertise spans:"
              //invertedColor="invertedColor"
              headerIcon={`${about.icon}`}
            />
          </div>
        </section>
      </Container>
    </Section>
  );
}

const methods = [
  { key: "planet-moon", name: "Responsive Design", type: "fad" },
  { key: "qrcode", name: "Innovative Coding", type: "fad" },
  { key: "window", name: "Efficient Scaling", type: "fad" },
  { key: "cubes", name: "Agile Development", type: "far" },
  { key: "layer-plus", name: "UI/UX Optimization", type: "fad" },
  { key: "solar-system", name: "Performance Tuning", type: "fad" },
];
