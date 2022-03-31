import { Typography, Card, CardContent, Grid } from '@material-ui/core'
import useStyles from './styles';
import { motion } from "framer-motion";


const Sushi = () => {
    const classes = useStyles()

    return (
        <div style={{ padding: '10px' }}>
            <Card className={classes.sushi} >
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
                                    <i style={{ fontSize: '45px', paddingBottom: '5px' }} className="devicon-react-original colored"></i>
                                    <Typography variant="body2" >
                                        React
                                    </Typography>
                                </Card>

                                <Card className={classes.cards} >
                                    <i style={{ fontSize: '45px', paddingBottom: '5px' }} className="devicon-threejs-original"></i>
                                    <Typography variant="body2" >
                                        three.js
                                    </Typography>
                                </Card>

                                <Card className={classes.cards} >
                                    <i style={{ fontSize: '45px', paddingBottom: '5px' }} className="devicon-materialui-plain colored"></i>
                                    <Typography variant="body2" >
                                        materialUI
                                    </Typography>
                                </Card>

                                <Card className={classes.cards} >
                                    <img src="/stripe.png" alt="stripe" style={{ height: '45px' }} />
                                    <Typography variant="body2" >
                                        Stripe
                                    </Typography>
                                </Card>

                                <Card className={classes.cards} >
                                    <img src="/commercejs.png" alt="commerjs" style={{ height: '45px' }} />
                                    <Typography variant="body2" >
                                        commerce.js
                                    </Typography>
                                </Card>

                                <Card className={classes.cards} >
                                    <img src="/vercel.png" alt="commerjs" style={{ height: '45px' }} />
                                    <Typography variant="body2" >
                                        Vercel
                                    </Typography>
                                </Card>
                            </Grid>
                        </Grid>
                    </motion.div  >
                </CardContent>
            </Card >
        </div >
    )
}


export default Sushi