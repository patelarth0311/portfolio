const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}


const projectViewStyle = {
    ...containerStyle,
    flexDirection: 'column',
    backgroundColor: "white",


}

const projectGalleryScrollViewStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    overflowX: 'auto',
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    columnGap: 50,
    padding: 30
}

const variants = {
    hidden: { opacity: 0},
    visible: {
    opacity: 1,
    transition: {
        delayChildren: 0.1,
        staggerChildren:  .2,
    }
    }
};

const items = {
    hidden: {scale: 0},
    visible: {
        scale: 1
    }
}

export {variants, items, containerStyle, projectViewStyle, projectGalleryScrollViewStyle }