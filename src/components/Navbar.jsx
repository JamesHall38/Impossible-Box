import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useStyles from './styles';



const Navbar = ({ setPath }) => {
    const classes = useStyles();

    const location = useLocation();
    const [nextPage, setNextPage] = useState('/')
    const [previousPage, setPreviousPage] = useState('/')


    useEffect(() => {
        const paths = ['/', '/Sushi', '/Maze', '/Contact']
        paths.forEach((path, index) => {
            if (location.pathname === path) {
                setPreviousPage(paths[index === 0 ? 3 : index - 1])
                setNextPage(paths[(index + 1) % paths.length])
            }
        })
    }, [location])

    return (
        <>
            <AppBar position="fixed" className={classes.appbar} >
                <Toolbar >
                    <IconButton onClick={() => setPath(previousPage)} aria-label="previous" component={Link} to={previousPage} className={classes.hover}>
                        <KeyboardArrowLeft />
                    </IconButton>

                    <Typography onClick={() => setPath('/')} component={Link} to="/" variant="h5" className={classes.hover} style={{ fontWeight: '600', textDecoration: 'none' }} >
                        James Hall
                    </Typography>

                    <IconButton onClick={() => setPath(nextPage)} aria-label="next" component={Link} to={nextPage} className={classes.hover}  >
                        <KeyboardArrowRight />
                    </IconButton>

                    <Typography onClick={() => setPath('/Sushi')} component={Link} to="/Sushi" variant="h6" className={classes.buttons}  >
                        Sushi
                    </Typography>

                    <Typography onClick={() => setPath('/Maze')} component={Link} to="/Maze" variant="h6" className={classes.buttons}>
                        Maze
                    </Typography>

                    <Typography onClick={() => setPath('/Contact')} component={Link} to="/Contact" variant="h6" className={classes.buttons}  >
                        Contact
                    </Typography>

                </Toolbar>
            </AppBar >
        </>
    );
};

export default Navbar