import {React} from 'react';
import Navbar from './componentes/Navbar'; 
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
    </Router>
  );
}

export default App;
