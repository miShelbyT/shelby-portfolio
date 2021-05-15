import './App.css'

import { Route } from 'react-router-dom'
import Main from './Components/Main'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import grey from '@material-ui/core/colors/grey'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[900],
    },
    secondary: {
      main: grey[400],
    },
  },
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Main />
      </ThemeProvider>
    </div>
  )
}

export default App
