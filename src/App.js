import './App.css';

import { Route } from 'react-router-dom'
import Main from './Components/Main'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {
  return (
    <div className="App">
      <Route path="/about" component={About}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/contact" component={Contact}/>
      <Main />
    </div>
  );
}

export default App;
