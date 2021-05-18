import './App.css'

import { useRef } from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from './Components/Main'
import About from './Components/About'
import Projects from './Components/Projects'
import Blogs from './Components/Blogs'
import Contact from './Components/Contact'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
// import purple from '@material-ui/core/colors/purple'
import grey from '@material-ui/core/colors/grey'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(255, 215, 186)',
    },
    secondary: {
      main: grey[900],
    },
  },
})

function App() {

  const aboutRef = useRef(null)
  const blogsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Main aboutRef={aboutRef} projectsRef={projectsRef} blogsRef={blogsRef} contactRef={contactRef} >
          <Switch>

            <Route exact path="/" />

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
    </div>
  )
}

export default App
