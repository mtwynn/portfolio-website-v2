import { Tag } from "../components/Projects/ProjectsStyles";
import ReactIcon from "../../src/icons/ReactIcon";
import MuiIcon from "../../src/icons/MuiIcon";
import NodeJsIcon from "../../src/icons/NodeJsIcon";
import ExpressJsIcon from "../../src/icons/ExpressJsIcon";

export const projects = [
  {
    title: <span style={{ color: "#1ed760" }}>KeyTrack</span>,
    description:
      "Helps artists organize and manage a list of their Spotify music, as well as help them search for and determine music qualities such as tempo and key.",
    image: "/images/keytrack.png",
    tags: ["React", "MaterialUI", "Node", "Express"],
    source: "https://github.com/mtwynn/KeyTrack-web",
    visit: "https://key-track.netlify.app/",
    id: 0,
  },
  {
    title: "E-Commerce",
    description:
      "While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
    image: "/images/2.png",
    tags: ["React", "JavaScript"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 1,
  },
  {
    title: "WebRTC App",
    description:
      "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
    image: "/images/3.jpg",
    tags: ["React", "WebRTC"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 2,
  },
  {
    title: "Unichat",
    description:
      "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
    image: "/images/4.jpg",
    tags: ["React", "ChatEngine", "Firebase"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];

export const TagMap = {
  React: (
    <>
      <ReactIcon />
      <Tag style={{ color: "#C53DCA" }}>React</Tag>
    </>
  ),
  MaterialUI: (
    <>
      <MuiIcon />
      <Tag style={{ color: "#29B6F6" }}>MaterialUI</Tag>
    </>
  ),
  Node: (
    <>
      <NodeJsIcon />
      <Tag style={{ color: "#76AE63" }}>NodeJS</Tag>
    </>
  ),
  Express: (
    <>
      <ExpressJsIcon />
      <Tag style={{ color: "#fff" }}>ExpressJS</Tag>
    </>
  ),
};
