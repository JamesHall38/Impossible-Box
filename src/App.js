import React, { Suspense, useState, lazy } from 'react'
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { default as Navbar } from './components/Navbar'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles'
import useStyles from './components/styles'
import { AnimatePresence } from "framer-motion"

// Marking event handler as 'passive' to make the page more responsive. 
import { passiveSupport } from 'passive-events-support/src/utils'
passiveSupport({
  listeners: [
    {
      element: 'canvas',
      event: 'wheel',
      prevented: true
    }
  ]
})


const Model = lazy(() => import('./components/Model'))
const Maze = lazy(() => import('./components/Maze'))
const Contact = lazy(() => import('./components/Contact'))
const Sushi = lazy(() => import('./components/Sushi'))
const Home = lazy(() => import('./components/Home'))


const theme = createTheme({
  overrides: {
    MuiInputBase: {
      input: {
        color: 'white',
      },
    },
  },
  palette: {
    primary: {
      main: '#fff'
    }
  },
  typography: {
    fontFamily: '<M PLUS Rounded 1c>',
    h6: {
      fontSize: '1.1rem'
    }
  }
});


const Main = () => {
  const classes = useStyles()
  const location = useLocation()
  const navigate = useNavigate()
  const [path, setPath] = useState('')

  return (
    <div style={{ display: 'flex', justifyContent: 'center', background: '#BC2020', height: '100vh' }}>
      <Navbar setPath={setPath} />
      <CssBaseline />

      <Suspense fallback={<div className={classes.load}></div>}>
        <Model navigate={navigate} location={location} path={path} />
      </Suspense>

      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Suspense fallback={<div className={classes.suspense} />}> <Home /> </Suspense>} />
          <Route exact path="/Sushi" element={<Suspense fallback={<div className={classes.suspense} />}> <Sushi /> </Suspense>} />
          <Route exact path="/Maze" element={<Suspense fallback={<div className={classes.suspense} />}> <Maze /> </Suspense>} />
          <Route exact path="/Contact" element={<Suspense fallback={<div className={classes.suspense} />}> <Contact /> </Suspense>} />
        </Routes>
      </AnimatePresence>
    </div >
  )
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Main />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
