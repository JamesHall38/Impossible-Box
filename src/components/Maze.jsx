import { Typography, Card, CardContent, Grid, Link } from '@material-ui/core'
import useStyles from './styles'
import { motion } from "framer-motion"



const Maze = () => {
    const classes = useStyles()

    return (
        <div style={{ position: 'absolute', padding: '10px' }} >
            <Card className={classes.maze} >
                <CardContent>
                    <motion.div
                        initial={{ opacity: 0, translateY: 10 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        exit={{ opacity: 0, translateY: 6 }}
                        transition={{ duration: 0.4 }}>

                        <Typography variant="h5" className={classes.title}>
                            Maze Solver
                        </Typography>

                    </motion.div  >
                </CardContent>
                <CardContent >
                    <motion.div
                        initial={{ opacity: 0, translateY: 10 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        exit={{ opacity: 0, translateY: 10 }}
                        transition={{ delay: 0.1, duration: 0.4 }}>

                        <Grid container>
                            <Grid item>
                                <br />
                                <Typography variant="body1" align='justify'>
                                    Un site fait avec React qui permet de visualiser deux algorithmes: un
                                    algorithme de division récursive afin de générer un labyrinthe,
                                    et l'algorithme A*, qui permet de le résoudre en trouvant le chemin de plus court.
                                </Typography>
                            </Grid>
                        </Grid>

                    </motion.div  >
                </CardContent>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}>
                    <div style={{ width: '100%', top: '10px', padding: '10px', textAlign: 'end', position: 'absolute' }} >
                        <Link variant='h6' style={{ color: 'white', background: 'rgb(0,0,0,0.1)', padding: '10px', borderRadius: '7%' }} href='https://maze-solver.vercel.app' >
                            Visiter
                        </Link>
                    </div >
                </motion.div  >
            </Card >
        </div >
    )
}

export default Maze