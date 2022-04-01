import { Typography, Card, CardContent, Link } from '@material-ui/core'
import useStyles from './styles'
import { motion } from "framer-motion"


const Home = () => {
    const classes = useStyles()

    return (
        <div style={{ padding: '10px' }}>
            <Card className={classes.home} >
                <CardContent >
                    <motion.div
                        initial={{ opacity: 0, translateY: 10 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        exit={{ opacity: 0, translateY: 6 }}
                        transition={{ duration: 0.4 }}>

                        <Typography variant="h6" >
                            Bonjour, je suis développeur front-end à Grenoble
                        </Typography>

                        <Typography variant="h6" >
                            Bienvenue sur mon portfolio!
                        </Typography>
                    </motion.div  >

                </CardContent>
                <CardContent >
                    <motion.div
                        initial={{ opacity: 0, translateY: 10 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        exit={{ opacity: 0, translateY: 10 }}
                        transition={{ delay: 0.1, duration: 0.4 }}>

                        <Typography style={{ textAlign: 'center' }} variant="h3" >
                            James Hall
                        </Typography>

                        <Link href='https://github.com/JamesHall38/Impossible-Box' style={{ textDecoration: 'none' }}>
                            <i style={{ fontSize: '25px', paddingLeft: '200px' }} className="devicon-github-original" />
                        </Link>
                        <Link href='https://linkedin.com/in/james-hall38' style={{ textDecoration: 'none' }}>
                            <i style={{ fontSize: '25px', paddingLeft: '5px' }} className="devicon-linkedin-plain" />
                        </Link>

                    </motion.div  >
                </CardContent>
            </Card >
        </div >
    )
}

export default Home