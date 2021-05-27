import './App.css'

import { Route, Switch } from 'react-router-dom'
import {  } from 'react-router-dom';
import Main from './Components/Main'
import About from './Components/About'
import Projects from './Components/ProjectContainer'
import Blogs from './Components/Blogs'
import Contact from './Components/Contact'
import Home from './Components/Home'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(160, 26, 88)',
    },
    secondary: {
      main: 'rgb(233, 236, 239)',
    },
  },
})

function App() {

  
  return (
    <>
      <ThemeProvider theme={theme}>
        <Main >
          <Switch>

          <Route exact path="/" >
            <Home />
          </Route>

            <Route path="/about">
              <About/>
            </Route>

            <Route path="/projects">
              <Projects/>
            </Route>

            <Route path="/blogs">
              <Blogs/>
            </Route>

            <Route path="/contact">
              <Contact/>
            </Route>
            
          </Switch>
        </Main>
      </ThemeProvider>
    </>
  )
}

export default App
