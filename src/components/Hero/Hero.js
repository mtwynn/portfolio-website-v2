import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
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
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
