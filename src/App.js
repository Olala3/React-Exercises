import logo from './logo.svg';
import './App.css';
import {Counter, } from './Exercises'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  document.title= 'Exercises';

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path='/counter' element={<Counter/>} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
