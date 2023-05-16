import { motion } from "framer-motion"
import { projectViewStyle, projectGalleryScrollViewStyle, items } from "../styles/ProjectsViewStyle"
import { MenuSideBar } from "./MenuSideBar"
import eventreminder from "../images/eventreminder.png"
import poke from "../images/poke.png"
import nftsq from "../images/nftsq.png"
import compass from "../images/compass.png"
import { variants } from "../styles/ProjectsViewStyle"
import { transition } from "../styles/Animation"
import { Project } from "../types/types";

export function ProjectsView() {
    return <motion.div style={projectViewStyle as React.CSSProperties}>
    <MenuSideBar></MenuSideBar>
    <ProjectGalleryScrollView></ProjectGalleryScrollView>
    </motion.div>
}

function ProjectGalleryScrollView() {
  return <motion.div 
  variants={variants}
  initial="hidden"
  animate="visible"
  id = "projectGallContainer" 
  transition={transition}
  style={projectGalleryScrollViewStyle as React.CSSProperties}>
    <ProjectCard name={"EventReminder"} img={eventreminder}></ProjectCard>
    <ProjectCard name={"myPokedex"} img={poke}></ProjectCard>
    <ProjectCard name={"NFT Search Query"} img={nftsq}></ProjectCard>
    <ProjectCard width ={300} name={"Compass"} img={compass}></ProjectCard>
  </motion.div>
}

function ProjectCard({name, img, width}: Project) {
  return <motion.div
  transition={transition}
  variants={items}
  >
    <img width= { width ? width : 180} src={img}></img>
    <h4>{name}</h4>
  </motion.div>
}