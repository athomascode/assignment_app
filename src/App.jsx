import './App.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { routeGenerator } from './routes';

function App(props) {

  
  return(
    <Router>
      <Routes>
        {routeGenerator({         
          ...props,
        })}
      </Routes>
    </Router>
  ); 
}

export default App;
