
import './App.css'


import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import {Crud} from './pages'

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Crud/>} />
      </Routes>
     
          

    </Router>
  );
}


export default App
