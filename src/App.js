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


const Model = lazy(() => import('./components/model/Model'))
const Maze = lazy(() => import('./components/pages/Maze'))
const Contact = lazy(() => import('./components/pages/Contact'))
const Sushi = lazy(() => import('./components/pages/Sushi'))
const Home = lazy(() => import('./components/pages/Home'))


const theme = createTheme({
  overrides: {
    MuiInputBase: {
      root: {
        height: '50px',
      },
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
      fontSize: '1rem'
    },
    h5: {
      fontSize: '1.3rem'
    },
    body2: {
      fontSize: '0.7rem'
    }

  }
});


const Main = () => {
  const classes = useStyles()
  const location = useLocation()
  const navigate = useNavigate()
  const [path, setPath] = useState('')

  return (
    <div style={{ display: 'flex', background: '#BC2020' }}>
      <Navbar setPath={setPath} />
      {/* <CssBaseline /> */}

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
