import './App.css'
import Navbar from './components/navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Maincomponent from './components/maincomponent';
import heroImage from './assets/herobg.png';
import Hero from './components/hero';
import { StarsCanvas } from './components/canvas';
import Contact from './components/Contact';

function App() {

  return (
      <Router>
        <div  style={{position:'relative',zIndex:0,backgroundColor:'#050816'}}>
          <div style={{backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundImage:`url(${heroImage})`}}>
            <Navbar/>
            <Hero/>
          </div>
          <Maincomponent/>
          <div style={{position:'relative',zIndex:0}}>
             <Contact/>
             <StarsCanvas/>
          </div>
        </div>
      </Router>
  )
}

export default App
