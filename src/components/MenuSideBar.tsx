import { motion } from "framer-motion"
import { sideBarStyle,  collapsedSideBarStyle,  sideBarContainerStyle, topsideBarStyle , consistentStyle, sideBarExpandedStyle, variants } from "../styles/MenuSideBarStyle"
import me from '../images/me.png'
import React from "react"
import { MenuOptions } from "./MenuOptions"
import { buttonSideBarStyle, optionContainerSideBarStyle, sideBarHoverAnimation, optionsContainer} from "../styles/ButtonStyle"
import { useState, useEffect } from "react"
import menu from '../images/menu.svg'
import close from '../images/close.svg'
import { useNavigate } from "react-router-dom"
import { buttonStyle, hoverAnimation } from "../styles/ButtonStyle"



export function MenuSideBar() {

    const [expand, setExpand] = useState<{showOptions: Boolean, collapse: Boolean, style: {}}>({
        showOptions: window.innerWidth > 500,
        collapse: false,
        style: collapsedSideBarStyle
    })

    useEffect(() => {
        window.addEventListener('resize', () => {
                setExpand((prev) => {
                    return {
                        showOptions: window.innerWidth > 500,
                        collapse: window.innerWidth > 500 ?  false : prev.collapse,
                        style: window.innerWidth > 500 && prev.collapse ? collapsedSideBarStyle : sideBarExpandedStyle }
                })
        }, true)
    },[])




    return <motion.div style={sideBarContainerStyle}>
    <motion.div 
    variants={variants}
    initial={"hidden"}
    transition={{type: "spring", stiffness: 200, damping:15}}
    animate={{height: expand.collapse ? 300: 80, ...variants.visible}}
    style={consistentStyle as React.CSSProperties} >
        
        {expand.showOptions ? 
        <ExpandedMenu></ExpandedMenu>
        : 
            <CollapsableMenu showOptions={expand.showOptions} collapse={expand.collapse} onClick={() => setExpand((prev) => {
                return {
                    showOptions: prev.showOptions,
                    collapse: !prev.collapse,
                    style: prev.collapse ? collapsedSideBarStyle : sideBarExpandedStyle }
            })}></CollapsableMenu>
        }
    </motion.div>
    </motion.div>

}

function ExpandedMenu() {
    return <div style = {collapsedSideBarStyle as React.CSSProperties}>
    <BioCard></BioCard>
    <MenuOptions showAnimation={true} expand={false} 
    hoverAnimation={sideBarHoverAnimation} 
    menuStyle={{...optionsContainer as React.CSSProperties, flexWrap: 'none', gap: '0 0', padding: 0}} 
    buttonStyle={buttonSideBarStyle}></MenuOptions>
    </div>
}

function CollapsableMenu(props: {showOptions: Boolean, collapse: Boolean, onClick: () => any}) {
    return         <div>
    <div style = {topsideBarStyle as React.CSSProperties}>
    <BioCard></BioCard>
        <HamBurger  close = {props.collapse} onClick={() =>  props.onClick()}>
        </HamBurger>
    </div>

    {props.collapse && (
        <MenuOptions showAnimation={true} expand = {props.collapse || props.showOptions} hoverAnimation={sideBarHoverAnimation}  buttonStyle={buttonSideBarStyle} menuStyle={optionContainerSideBarStyle}></MenuOptions>
    )
    }
    </div>
}

function BioCard() {
    const navigate = useNavigate()
    return <>
    <motion.button  onClick={() => navigate('/')} style={{ background: 'none', border: 'none'}}>
    <img  width={50} src={me}></img>
    </motion.button>
        
    </>
}


function HamBurger(props:  any ) {
    return <>
    <motion.button onClick={() => props.onClick()}  style={{background: 'none', border: 'none', width: 50}}>
        {!props.close ? 
   <motion.img  src={menu}></motion.img> :
   <motion.img  src={close}></motion.img>
        }
 
    </motion.button>
    
        

    </>
}


