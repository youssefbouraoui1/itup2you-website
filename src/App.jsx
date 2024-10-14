import './App.css'
import Navbar from './components/navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Intro from './components/intro';
import Maincomponent from './components/maincomponent';
import heroImage from './assets/herobg.png';

function App() {

  return (
      <Router>
        <div  style={{position:'relative',zIndex:0,backgroundColor:'black',height:'100vh'}}>
          <div style={{backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundImage:`url(${heroImage})`}}>
            <Navbar/>
          </div>
          <Maincomponent/>
        </div>
      </Router>
  )
}

export default App
