import { Variants, motion } from "framer-motion"
import { variants, item, expandedOptionContainerSideBarStyle} from "../styles/ButtonStyle"
import { useNavigate } from "react-router-dom";
import { Option, Menu } from "../types/types";


export function MenuOptions({buttonStyle, menuStyle, hoverAnimation, expand, showAnimation}: any) {
    const navigate = useNavigate()
    return <motion.div 
    variants={variants}
    initial= {!showAnimation? undefined : "hidden"}
    animate= {!showAnimation? undefined : "visible"}
    
    transition={{type: "spring", stiffness: 110, damping:15}}
    style={!expand ? {...menuStyle} : {...menuStyle, ...expandedOptionContainerSideBarStyle}}>
    <OptionButton title={"Experience"} navigate={() => navigate('/experience')} style={buttonStyle} hoverAnimation={hoverAnimation}></OptionButton>
    <OptionButton title={"Projects"} navigate={() => navigate('/projects')} style={buttonStyle} hoverAnimation={hoverAnimation}></OptionButton>
    <OptionButton title={"Skills"} navigate={() => console.log("a")} style={buttonStyle} hoverAnimation={hoverAnimation}></OptionButton>
    <OptionButton title={"Contact"} navigate={() => console.log("a")} style={buttonStyle} hoverAnimation={hoverAnimation}></OptionButton>
    </motion.div>
}


function OptionButton({navigate, title, style, hoverAnimation}: Option ) {
    return <motion.button 
    variants={item} 
    transition= {{type: "spring", stiffness: 150, damping:10}} 
    whileHover={hoverAnimation}
    style={style} onClick={() => navigate()}>
        <h6 style={{fontFamily: 'customFont2', fontSize: 15}}>{title}</h6>
    </motion.button>
}



