import { motion } from "framer-motion"
import { alignLeftStyle, experienceCardStyle , experienceFieldStyle, listStyle} from "../styles/ExperienceViewStyle"
import { Experience } from "../types/types"
import { MenuSideBar } from "./MenuSideBar"
export function ExperienceView() {
    return <motion.div     style = {experienceCardStyle as React.CSSProperties}>
     <MenuSideBar></MenuSideBar>
    <ExperienceCard></ExperienceCard>
    </motion.div>
}

function ExperienceCard() {

    const experience: Experience = {location: "Atlanta, GA", period: "May 2022 - Aug 2022", role: "Software Engineer Intern", name: "Salesloft", 
    achievements: ["Collaborated alongside the data team to prepare their data lakes for usage by internal teams",
"Implemented a monitoring system using Datadog and improved visibility on data lakes by 100%, allowing internal teams to more easily access and analyze the data",
"Improved spark querying performance on data lakes hosted on GCS and AWS by leveraging the DeltaLake framework, resulting in a 30% decrease in query execution time",
"Restructured the team's Kubernetes project set-up to improve usability and conciseness",
"Addressed production bugs and improvements in running spark jobs using Datadog and Sumo Logic to monitor performance and using CI/CD pipelines for rapid iteration"]}

    return <motion.div>
    
    <ExperienceField  period = {experience.period} location={experience.location} role = {experience.role} name={experience.name} achievements={experience.achievements}></ExperienceField>
    </motion.div>
}

function ExperienceField({name, achievements, location, period, role}: Experience) {
    return <motion.div
    style = {experienceFieldStyle as React.CSSProperties}
    >
    <div style={alignLeftStyle as React.CSSProperties}>
    <h3>{role}</h3>
    <h4>{name}</h4>
    <h4 style = {{color: "#8d8d8e"}}>{location}</h4>
    <h4 style = {{color: "#8d8d8e"}}>{period}</h4>
    </div>
    
    <ul style={listStyle as React.CSSProperties}>
    {achievements.map((item,index) => (
        <li key = {index} style = {{textAlign: 'left'}}>
            {item}
        </li>
    ))
    }
    </ul>
    </motion.div>
}


