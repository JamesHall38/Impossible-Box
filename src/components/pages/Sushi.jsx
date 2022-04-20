import { Typography, Card, CardContent, Grid, Link } from '@material-ui/core'
import useStyles from '../styles'
import { motion } from "framer-motion"


const Sushi = () => {
    const classes = useStyles()

    return (
        <>
            <div className={classes.container}>
                <Card className={classes.responsiveCard} >
                    <CardContent>

                        <motion.div
                            initial={{ opacity: 0, translateY: 10 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            exit={{ opacity: 0, translateY: 6 }}
                            transition={{ duration: 0.4 }}>

                            <Typography variant="h5" >
                                Sushi Shop
                            </Typography>

                        </motion.div  >

                    </CardContent>
                    <CardContent  >
                        <motion.div
                            initial={{ opacity: 0, translateY: 10 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            exit={{ opacity: 0, translateY: 10 }}
                            transition={{ delay: 0.1, duration: 0.4 }}>

                            <Grid container>
                                <Grid item>
                                    <Typography variant="body1" align='justify' style={{ paddingBottom: '20px' }}>
                                        Un site d'e-commmerce qui présente les produits en 3D et utilise l'API de commerce.js pour traîter les commandes.
                                    </Typography>
                                </Grid>
                                <Grid item style={{ display: 'flex', paddingTop: '10px', width: '100%' }}>

                                    <Card className={classes.cards} >
                                        <i style={{ fontSize: 'min(max(5px, 4vw), 45px)', paddingBottom: '5px' }} className="devicon-react-original colored"></i>
                                        <Typography variant="body2" >
                                            React
                                        </Typography>
                                    </Card>

                                    <Card className={classes.cards} >
                                        <i style={{ fontSize: 'min(max(5px, 4vw), 45px)', paddingBottom: '5px' }} className="devicon-threejs-original"></i>
                                        <Typography variant="body2" >
                                            three.js
                                        </Typography>
                                    </Card>

                                    <Card className={classes.cards} >
                                        <i style={{ fontSize: 'min(max(5px, 4vw), 45px)', paddingBottom: '5px' }} className="devicon-materialui-plain colored"></i>
                                        <Typography variant="body2" >
                                            MUI
                                        </Typography>
                                    </Card>

                                    <Card className={classes.cards} >
                                        <img src="/stripe.png" alt="stripe" style={{ height: 'min(max(5px, 4vw), 45px)' }} />
                                        <Typography variant="body2" >
                                            Stripe
                                        </Typography>
                                    </Card>

                                    <Card className={classes.cards} >
                                        <img src="/commercejs.png" alt="commerjs" style={{ height: 'min(max(5px, 4vw), 45px)' }} />
                                        <Typography variant="body2" >
                                            commerce
                                        </Typography>
                                    </Card>

                                    <Card className={classes.cards} >
                                        <img src="/vercel.png" alt="commerjs" style={{ height: 'min(max(5px, 4vw), 45px)' }} />
                                        <Typography variant="body2" >
                                            Vercel
                                        </Typography>
                                    </Card>
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
                            <Link variant='h6' style={{ color: 'white', background: 'rgb(0,0,0,0.1)', padding: '10px', borderRadius: '7%' }} href='https://sushi-shop.vercel.app' >
                                Visiter
                            </Link>
                        </div >
                    </motion.div>
                </Card >
            </div >
        </>
    )
}


export default Sushi