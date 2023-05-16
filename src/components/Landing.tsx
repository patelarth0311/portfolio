import { motion, useAnimate, stagger } from "framer-motion"
import me from '../images/me.png'
import { landingContainerStyle, bioContainerStyle, variants, item, messageStyle } from "../styles/LandingStyle"
import { MenuOptions } from "./MenuOptions"
import { useEffect } from "react"
import bubble from '../images/bubble.svg'
import { buttonStyle, optionsContainer, hoverAnimation } from "../styles/ButtonStyle"
import { transition } from "../styles/Animation"


export function Landing() {

    return <motion.div
    transition={transition}
    initial="hidden"
    animate="visible"
    variants={variants}
    style={landingContainerStyle as React.CSSProperties}>






    
    
    <motion.div
    style = {bioContainerStyle as  React.CSSProperties}
    >
    <motion.img  
    transition={transition}
    variants = {item}
    src={bubble}>
    </motion.img>
    
    <motion.img 
    variants = {item}
    transition={transition}
    src={me} style={{width: 210}}>
    </motion.img>
    </motion.div>
    <MenuOptions  hoverAnimation={hoverAnimation} menuStyle={optionsContainer as React.CSSProperties} buttonStyle={buttonStyle as React.CSSProperties}>
    </MenuOptions>




   

    </motion.div>
}