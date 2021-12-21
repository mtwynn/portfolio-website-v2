import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FcMindMap } from "react-icons/fc";
import { Span } from "./HeaderStyles";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = (props) => {
  return (
    <>
      <Container>
        <Div1>
          <Link href="/">
            <a
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                marginBottom: "2rem",
              }}
              onClick={props.handleCloseResume}
            >
              <FcMindMap size="2.5rem" />
              <Span>TN</Span>
            </a>
          </Link>
        </Div1>
        <Div2>
          <li>
            <Link href="#projects">
              <NavLink onClick={props.handleCloseResume}>Projects</NavLink>
            </Link>
          </li>
          <li>
            <Link href="#tech">
              <NavLink onClick={props.handleCloseResume}>Skills</NavLink>
            </Link>
          </li>
          <li>
            <Link href="#resume">
              <NavLink
                // target="_blank"
                href="#resume"
                style={{ color: "#fff", textDecoration: "none" }}
                onClick={props.handleOpenResume}
              >
                Resume
              </NavLink>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <NavLink onClick={props.handleCloseResume}>About</NavLink>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <NavLink onClick={props.handleCloseResume}>Contact</NavLink>
            </Link>
          </li>
        </Div2>
        <Div3>
          <SocialIcons target="_blank" href="https://github.com/mtwynn">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            target="_blank"
            href="https://www.linkedin.com/in/mtam-nguyen/"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </Div3>
      </Container>
    </>
  );
};

export default Header;
