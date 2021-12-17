import { Tag } from "../components/Projects/ProjectsStyles";
import ReactIcon from "../../src/icons/ReactIcon";
import MuiIcon from "../../src/icons/MuiIcon";
import NodeJsIcon from "../../src/icons/NodeJsIcon";
import ExpressJsIcon from "../../src/icons/ExpressJsIcon";
import JavaIcon from "../icons/JavaIcon";
import PythonIcon from "../icons/PythonIcon";
import FirebaseIcon from "../icons/FirebaseIcon";
import SwiftIcon from "../icons/SwiftIcon";
import HerokuIcon from "../icons/HerokuIcon";
import ParseIcon from "../icons/ParseIcon";
import { Icons } from "../icons/IconStyles";

export const projects = [
  {
    title: <span style={{ color: "#1ED760" }}>KeyTrack</span>,
    description:
      "Helps artists organize and manage a list of their Spotify music, as well as help them search for and determine music qualities such as tempo and key.",
    image: "/images/keytrack.png",
    tags: ["React", "MaterialUI", "Node", "Express"],
    source: "https://github.com/mtwynn/KeyTrack-web",
    visit: "https://key-track.netlify.app/",
    id: 0,
  },
  {
    title: "SmartCycle",
    description:
      'An IoT "smart" trashcan that is capable of sorting and distinguishing between mixed recycling and landfill products.',
    image: "/images/smartcycle.png",
    tags: ["Java", "Python", "Firebase"],
    source: "https://github.com/mtwynn/SmartCycle",
    id: 1,
  },
  {
    title: <span style={{ color: "#FC4639"}}>AugmaAR</span>,
    description:
      "An artwork marketplace where users can preview a picture or painting on their own wall using AR.",
    image: "/images/augma.png",
    tags: ["Swift", "Heroku", "Parse"],
    source: "https://github.com/mtwynn/AugmaAR",
    visit: "https://github.com/mtwynn/AugmaAR",
    id: 2,
  },
  {
    title: <span style={{ color: "#009745"}}>SmartRES</span>,
    description:
      "An IoT solution for real estate agents to replace traditional painted real estate signs with wireless, digital signs.",
    image: "/images/smartres.png",
    tags: ["Swift", "Heroku", "Firebase"],
    source: "https://github.com/mtwynn/SmartRES",
    visit: "https://github.com/mtwynn/SmartRES",
    id: 3,
  },
];

export const TimeLineData = [
  { year: "June 2018", text: "Learned Javascript and built first projects" },
  { year: "March 2019", text: "Worked as front-end developer for university IT department" },
  { year: "June 2019", text: "Developed full-stack iOS app for small real estate centered start-up" },
  { year: "November 2019", text: "Created an IoT trash-recycling solution powered by Google Vision AI with team of students" },
  { year: "June 2020", text: "Accepted current software engineering position" },
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
      <Tag style={{ color: "#FFFFFF" }}>ExpressJS</Tag>
    </>
  ),
  Java: (
    <>
      <JavaIcon />
      <Tag style={{ color: "#E86F00" }}>Java</Tag>
    </>
  ),
  Python: (
    <>
      <PythonIcon />
      <Tag style={{ color: "#F7D246" }}>Python</Tag>
    </>
  ),
  Swift: (
    <>
      <SwiftIcon />
      <Tag style={{ color: "#FDA50E" }}>Swift</Tag>
    </>
  ),
  Heroku: (
    <>
      <HerokuIcon />
      <Tag style={{ color: "#7A54BC" }}>Heroku</Tag>
    </>
  ),
  Firebase: (
    <>
      <FirebaseIcon />
      <Tag style={{ color: "#FDA50E" }}>Firebase</Tag>
    </>
  ),
  Parse: (
    <>
      <ParseIcon />
      <Tag style={{ color: "#169CEE" }}>Parse</Tag>
    </>
  ),
};
