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
        height: '270px',
        color: 'white',
        top: 'calc(50vh - 135px)',
        background: 'rgb(32,32,35,0.5)',
        backdropFilter: 'blur(10px)',
        "@media (max-width: calc(1.75*100vh))": {
            top: '0',
            // display:'inline-block',
            left: 'calc(50vw - 50% - 10px)',
            textAlign: 'center',
            maxWidth: '620px',
            height: '261px',
        },
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
        // position: 'fixed',
        background: '#BC2020',
        // maxWidth: '50vw',
        width: '100vw',
        // height: '100vh',
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