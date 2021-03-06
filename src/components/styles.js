import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    appbar: {
        background: 'rgb(32,32,35,0.5)',
        backdropFilter: 'blur(10px)',
        boxShadow: 'none',
        display: 'flex',
        alignItems: 'flex-start',
        height: '60px',
        top: 'auto',
        bottom: '0',
        overflow: 'hidden',
        paddingLeft: '15vw',
        "@media (max-width: calc(1.75*100vh))": {
            alignItems: 'center',
            paddingLeft: '0',

        },
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
        paddingRight: '10px',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    container: {
        position: 'relative',
        margin: '10px',
        height: '261px',
        width: '450px',
    },
    responsiveCard: {
        position: 'absolute',
        left: 'calc(70vw - 200px)',
        width: '100%',
        // height: '100%',
        height: '261px',
        color: 'white',
        top: 'calc(50vh - 135px)',
        background: 'rgb(32,32,35,0.5)',
        backdropFilter: 'blur(10px)',
        "@media (max-width: calc(1.75*100vh))": {
            top: '0',
            left: 'calc(50vw - 50% - 10px)',
            textAlign: 'center',
        },
    },
    suspense: {
        position: 'absolute',
        margin: '10px',
        left: 'calc(70vw - 200px)',
        borderRadius: '5px',
        width: '450px',
        // height: '100%',
        height: '261px',
        top: 'calc(50vh - 135px)',
        background: 'rgb(32,32,35,0.5)',
        backdropFilter: 'blur(10px)',
        "@media (max-width: calc(1.75*100vh))": {
            top: '0',
            left: 'calc(50vw - 235px)',
            textAlign: 'center',
        },
    },
    cards: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgb(32,32,35,0.1)',
        aspectRatio: '1',
        width: 'min(max(5px, 100%), 95px)',
        height: ' min(max(5px, 100%), 95px)',
        color: 'white',
    },
    load: {
        position: 'absolute',
        // top: '20vh',
        top: '20vh',
        left: '25vw',
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
        "@media (max-width: calc(1.75*100vh))": {
            left: '45vw',
            top: '45vh',
        },
    },
    canvas: {
        position: 'absolute',
        background: '#BC2020',
        animationName: '$fadein',
        animationDuration: ' 1.0s',
        minWidth: '150vw',
        left: '-50vw',
        "@media (max-width: calc(1.75*100vh))": {
            minWidth: '100vw',
            left: '0',
        },
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