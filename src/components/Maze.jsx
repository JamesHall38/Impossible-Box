import { Typography, Card, CardContent, Grid } from '@material-ui/core'
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
                            Maze Generator
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
            </Card >
        </div >
    )
}

export default Maze