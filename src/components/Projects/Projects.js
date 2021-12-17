import React from "react";
import { styled } from "@mui/material/styles";

import {
  BlogCard,
  CardInfo,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";

import { Button } from "@mui/material";

import { Code, Visibility } from "@mui/icons-material";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects, TagMap } from "../../constants/constants";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.light,
  fontWeight: 900,
}));

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title={title}>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TagList>
                {tags.map((tag, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Tag>{TagMap[tag]}</Tag>
                  </div>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ColorButton
                size="large"
                href={source}
                target="_blank"
                variant="outlined"
                startIcon={<Code />}
              >
                Code
              </ColorButton>
              {visit &&
              <ColorButton
                size="large"
                href={visit}
                target="_blank"
                variant="outlined"
                startIcon={<Visibility />}
              >
                Demo
              </ColorButton>
              }
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
