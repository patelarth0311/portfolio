const sideBarStyle = {

   
}

const consistentStyle = {
    backgroundColor: 'rgb(29, 29, 31)',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, .1)',
    position: 'fixed',
    top: 10,
    minHeight: 80,
    borderRadius: 21.31,
    width: 'calc(100% - 20px)',
    maxWidth: 700,
    overflow: 'hidden',


}

const bioCardStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: 10

}
const collapsedSideBarStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 700,
    width: '100%',
    height: '100%'
}


const sideBarExpandedStyle = {
    flexDirection: 'column',

    
}
const sideBarContainerStyle  = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    width: "100%",
}


const topsideBarStyle  = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'calc(100% - 10px)',
    position: 'absolute',
    top: 15

    
    
}

const variants = {
    hidden: {
        scale: 0,
        opacity: 0,
    }, visible: {
        scale: 1,
        opacity: 1
    }
}


const titleContainerStyle = {display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'flex-start'}

export {variants, collapsedSideBarStyle , sideBarExpandedStyle, consistentStyle, sideBarStyle, bioCardStyle, titleContainerStyle, sideBarContainerStyle, topsideBarStyle }