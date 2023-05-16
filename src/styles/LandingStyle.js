
const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const landingContainerStyle = {

    width: "100%",
    height: "100vh",
    flexDirection: 'column',
    backgroundColor: 'white',
    ...containerStyle,
    overflow: 'hidden'
    

}
const bioContainerStyle = {
    padding: 20,
    ...containerStyle,
    flexWrap: 'wrap'
}

const messageStyle = {
    backgroundColor: '#FA4A0C',
    textAlign: 'left',
    color: 'white',
    width: 'auto',
    maxWidth: 291,
    height: 'auto',
    padding: 10,
    borderRadius: 15,
    fontWeight: 400,
    fontSize: 17,
    fontFamily: 'customFont2',
    position: 'relative'

}

const variants = {
    hidden: { opacity: 0},
    visible: {
    opacity: 1,
    transition: {
        delayChildren: 0.1,
        staggerChildren:  .3,
    }
    }
};





const item = {
    hidden: { scale: 0, display: 'none' },
    visible: {
    scale: 1,
    display: 'flex'
    }
}

export {landingContainerStyle, bioContainerStyle, variants, item, messageStyle}