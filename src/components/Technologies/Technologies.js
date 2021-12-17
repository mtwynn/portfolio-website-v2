import React from "react";
import { DiAws, DiCode, DiFirebase, DiIllustrator, DiMootoolsBadge, DiReact } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Skills and Technologies</SectionTitle>
    <SectionText>
      Experienced in web development and mobile development technologies.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="4rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          {['ReactJS', 'Javascript/TypeScript', 'MeteorJS', 'Bootstrap', 'MaterialUI', 'HTML/CSS'].map((skill) => (
            <ListParagraph>
            {skill}
          </ListParagraph>
          ))}
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="4rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          {['NodeJS', 'ExpressJS', 'MongoDB', 'SQL', 'Heroku', 'Firebase'].map((skill) => (
            <ListParagraph>
            {skill}
          </ListParagraph>
          ))}
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiIllustrator size="4rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          {['Axure RP', 'Adobe XD (upcoming)', 'Adobe Photoshop (upcoming)', 'Adobe Illustrator (upcoming)', 'Adobe InDesign (upcoming)'].map((skill) => (
            <ListParagraph>
            {skill}
          </ListParagraph>
          ))}
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAws size="4rem" />
        <ListContainer>
          <ListTitle>Cloud Computing</ListTitle>
          {['AWS DynamoDB', 'AWS Cloudwatch', 'AWS Lambda', 'AWS API Gateway', 'AWS Cognito', 'Serverless'].map((skill) => (
            <ListParagraph>
            {skill}
          </ListParagraph>
          ))}
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMootoolsBadge size="4rem" />
        <ListContainer>
          <ListTitle>Testing</ListTitle>
          {['Jest', 'Cypress'].map((skill) => (
            <ListParagraph>
            {skill}
          </ListParagraph>
          ))}
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCode size="4rem" />
        <ListContainer>
          <ListTitle>Other</ListTitle>
          {['C/C++', 'C#', 'Java', 'Python', 'Swift'].map((skill) => (
            <ListParagraph>
            {skill}
          </ListParagraph>
          ))}
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
