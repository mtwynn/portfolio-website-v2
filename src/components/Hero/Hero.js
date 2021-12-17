import React from "react";
import { Image } from "react-bootstrap";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";

import Typist from "react-typist";

import FadeIn from "react-fade-in";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Tam Nguyen
      </SectionTitle>
      <SectionText>
        <FadeIn>
          <Typist>
            {"Software Engineer"}
            <Typist.Backspace count={20} delay={1500} />
            {"Web Developer"}
            <Typist.Backspace count={13} delay={1500} />
            {"iOS Developer"}
            <Typist.Backspace count={20} delay={1500} />
            {"Check out my projects!"}
          </Typist>
        </FadeIn>
      </SectionText>
      <SectionText />
      <FadeIn transitionDuration="1000">
        <Image
          width="60%"
          src="/images/profile-pic1.jpg"
          roundedCircle
          fluid
          style={{
            animation: "float 4s ease-in-out infinite",
          }}
        />
      </FadeIn>
      <br />
      <br />
    </LeftSection>
  </Section>
);

export default Hero;
