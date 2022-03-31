
import React, { useRef, useState } from 'react'
import { Typography, Card, CardContent } from '@material-ui/core'
import useStyles from './styles'
import { motion } from "framer-motion"
import { Button, Grid, TextField } from '@material-ui/core'
import { useForm, FormProvider, useFormContext, Controller } from 'react-hook-form'
import emailjs from '@emailjs/browser'


const FormInput = ({ name, label, required, value, onChange, multiline }) => {
    const { control } = useFormContext()
    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <TextField
                    InputLabelProps={{
                        style: {
                            color: "white",
                            fontSize: '15px',
                        }
                    }}
                    variant="filled"
                    size='small'
                    rows={multiline ? 4 : 2}
                    multiline
                    {...field}
                    value={value}
                    onChange={onChange}
                    name={name}
                    label={label}
                    required={required}
                    fullWidth
                />
            )}
        />
    )
}

const Contact = () => {
    const classes = useStyles()
    const methods = useForm()
    const form = useRef()
    const [nameFormContent, setNameFormContent] = useState('')
    const [emailFormContent, setEmailFormContent] = useState('')
    const [messageFormContent, setMessageFormContent] = useState('')

    const handleSubmit = (e) => {
        sendEmail(e)

        setNameFormContent('')
        setEmailFormContent('')
        setMessageFormContent('')
    }

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_r28kgso', 'template_v20bcjf', form.current, 'pe21uc5Y6SIdkmrMv')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
    }

    return (
        <div style={{ position: 'absolute', padding: '10px' }} >
            <Card className={classes.contact} >
                <CardContent style={{ height: '50px' }} >
                    <motion.div
                        initial={{ opacity: 0, translateY: 10 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        exit={{ opacity: 0, translateY: 6 }}
                        transition={{ duration: 0.4 }}>

                        <Typography variant="h5" className={classes.title}>
                            Contactez-moi
                        </Typography>

                    </motion.div  >
                </CardContent>
                <CardContent style={{ paddingBottom: '15px' }} >

                    <FormProvider {...methods}>
                        <form ref={form} onSubmit={handleSubmit}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6}>
                                    <motion.div
                                        initial={{ opacity: 0, translateY: 10 }}
                                        animate={{ opacity: 1, translateY: 0 }}
                                        exit={{ opacity: 0, translateY: 10 }}
                                        transition={{ delay: 0.1, duration: 0.4 }}
                                        style={{ width: '100%' }}>

                                        <FormInput required value={nameFormContent}
                                            onChange={e => setNameFormContent(e.target.value)}
                                            name="name" label="Nom" />

                                    </motion.div >
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <motion.div
                                        initial={{ opacity: 0, translateY: 10 }}
                                        animate={{ opacity: 1, translateY: 0 }}
                                        exit={{ opacity: 0, translateY: 10 }}
                                        transition={{ delay: 0.1, duration: 0.4 }}
                                        style={{ width: '100%' }}>

                                        <FormInput required value={emailFormContent}
                                            onChange={e => setEmailFormContent(e.target.value)}
                                            name="email" label="Email" />

                                    </motion.div >
                                </Grid>
                                <Grid item xs={10} sm={10}>
                                    <motion.div
                                        initial={{ opacity: 0, translateY: 10 }}
                                        animate={{ opacity: 1, translateY: 0 }}
                                        exit={{ opacity: 0, translateY: 10 }}
                                        transition={{ delay: 0.2, duration: 0.4 }}
                                        style={{ width: '100%' }}>

                                        <FormInput required value={messageFormContent} onChange={e => setMessageFormContent(e.target.value)} name="message" label="Message" multiline />

                                    </motion.div >
                                </Grid>
                                <Grid item xs={2} sm={2} style={{ display: 'flex', alignItems: 'center', }}>
                                    <motion.div
                                        initial={{ opacity: 0, translateY: 10 }}
                                        animate={{ opacity: 1, translateY: 0 }}
                                        exit={{ opacity: 0, translateY: 10 }}
                                        transition={{ delay: 0.2, duration: 0.4 }}
                                        style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', padding: '8px' }}>

                                        <Button type="submit" variant="contained" color="primary">Send</Button>

                                    </motion.div >
                                </Grid>
                            </Grid>
                        </form>
                    </FormProvider>
                </CardContent>
            </Card >
        </div >
    )
}

export default Contact