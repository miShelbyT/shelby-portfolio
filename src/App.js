import './App.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop'

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
    <BrowserRouter>
    <ScrollToTop>
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
