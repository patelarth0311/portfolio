const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}


const experienceCardStyle = {
    ...containerStyle,
    flexDirection: 'column',
    padding: 20


}

const alignLeftStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-start'
}

const experienceFieldStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)',
    borderRadius: 20,
    maxWidth: 804,
    height: 'auto',
    backgroundColor: 'white',
    padding: 20,
    rowGap: 10
}

const listStyle = {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10
}


export {containerStyle, experienceCardStyle, experienceFieldStyle, listStyle, alignLeftStyle}