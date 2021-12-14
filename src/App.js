import './App.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop'

import Main from './Components/Main'
import About from './Components/About'
import Projects from './Components/ProjectContainer'
import Blogs from './Components/Blogs'
import Contact from './Components/Contact'
import Home from './Components/Home'
// import { StyledEngineProvider } from '@mui/material/styles';

import { createTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    primary: {
      //dark red
      main: '#a01a58',
    },
    secondary: {
      //light grey
      main: '#efe9ec',
    },
  }, typography: {
    fontFamily: 'Poppins',
    fontSize: 8,
  }
})

function App() {

  
  return (
    <>
    {/* <StyledEngineProvider injectFirst> */}
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
      {/* </StyledEngineProvider> */}
    </>
  )
}

export default App
