import './App.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop'

import Main from './Components/Main'
import About from './Components/About'
import Projects from './Components/ProjectContainer'
import Blogs from './Components/Blogs'
import Contact from './Components/Contact'
import Home from './Components/Home'

import { createTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(160, 26, 88)',
    },
    secondary: {
      main: 'rgb(233, 236, 239)',
    },
  }, typography: {
    fontFamily: 'Poppins'
  }
})

function App() {

  
  return (
    <>
    <BrowserRouter>
    <ScrollToTop>
      {/* with theme provider we can now provide theme props to entire app bc we've wrapped ThemeProvider around the rest of the app */}
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
      </ScrollToTop>
      </BrowserRouter>
    </>
  )
}

export default App
