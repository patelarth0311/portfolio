
const optionsContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 10,
    columnGap: 20,
    rowGap: 10
}
const buttonStyle = {
    border: 'none',
    backgroundColor: '#FA4A0C',
    borderRadius: 20,
    width: 100,
    height: 50,
    color: 'white',
    
    
}

const buttonSideBarStyle = {
    border: 'none',
    borderRadius: 20,
    width: 100,
    height: 50,
    background: 'none',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgb(29, 29, 31)',
    color: 'rgb(232, 232, 237)'
 
}

const optionContainerSideBarStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,

    
}

const expandedOptionContainerSideBarStyle = {
    flexDirection:'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
    marginLeft: 10
}

const variants = {
    hidden: { opacity: 0},
    visible: {
    opacity: 1,
    transition: {
        delayChildren: 0.1,
        staggerChildren:  .1,
    }
    }
};

const item = {
    hidden: { opacity: 0, y: -60,},
    visible: {
    opacity: 1,
    y: 0,
    }
}

const hoverAnimation = {
    scale: 1.2
}

const sideBarHoverAnimation = {
    scale: 1,
}


export {expandedOptionContainerSideBarStyle,  sideBarHoverAnimation,  hoverAnimation, optionsContainer, buttonStyle, variants, item, buttonSideBarStyle, optionContainerSideBarStyle}