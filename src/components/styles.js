import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    appbar: {
        background: 'rgb(32,32,35,0.5)',
        backdropFilter: 'blur(10px)',
        boxShadow: 'none',
        display: 'flex',
        alignItems: 'center',
        height: '60px',
        // top: 'calc(100vh - 60px)',
        top: 'auto',
        bottom: '0',
        overflow: 'hidden',
    },
    hover: {
        textAlign: 'center',
        color: 'white',
        padding: '6px',
        borderRadius: '5px',
        '&:hover': {
            background: 'rgb(255,255,255,0.1)',
            textDecoration: 'underline',
        },
    },
    buttons: {
        color: 'white',
        padding: '10px',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    maze: {
        maxWidth: '620px',
        height: '261px',
        color: 'white',
        background: 'rgb(32,32,35,0.5)',
        backdropFilter: 'blur(10px)',
    },
    sushi: {
        maxWidth: '620px',
        minHeight: '261px',
        color: 'white',
        background: 'rgb(32,32,35,0.5)',
        backdropFilter: 'blur(10px)',
    },
    suspense: {
        position: 'relative',
        background: 'rgb(32,32,35,0.5)',
        maxWidth: '620px',
        width: '100%',
        margin: '10px',
        height: '261px',
        backdropFilter: 'blur(10px)',
        borderRadius: '1%',
    },
    home: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        textAlign: 'center',
        maxWidth: '620px',
        height: '261px',
        color: 'white',
        background: 'rgb(32,32,35,0.5)',
        backdropFilter: 'blur(10px)',
    },
    contact: {
        maxWidth: '620px',
        color: 'white',
        background: 'rgb(32,32,35,0.5)',
        backdropFilter: 'blur(10px)',
        fontSize: '20px',
    },
    cards: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgb(32,32,35,0.1)',
        aspectRatio: '1',
        width: '95px',
        height: '95px',
        color: 'white',
    },
    load: {
        position: 'absolute',
        top: '45vh',
        width: '50px',
        height: '50px',
        margin: '110px auto 0',
        border: 'solid 5px #fff',
        borderRadius: '50%',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        transition: 'all 0.5s ease-in',
        animationName: '$rotate',
        animationDuration: ' 1.0s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
    },
    canvas: {
        background: '#BC2020',
        width: '100vw',
        height: '100vh',
        animationName: '$fadein',
        animationDuration: ' 1.0s',
    },
    '@keyframes rotate': {
        from: {
            transform: 'rotate(0deg)',
        },
        to: {
            transform: 'rotate(360deg)',
        }
    },
    '@keyframes fadein': {
        from: {
            opacity: '0'
        },
        to: {
            opacity: '1'
        },
    }

}))