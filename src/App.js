import logo from './logo.svg';
import './App.css';
import {Counter, ShowGithubUser, Welcome, } from './Exercises'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  document.title= 'Exercises';

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Link to='/'>Home</Link> |
            <Link to='counter'>Counter</Link> |
            <Link to='users'>Users</Link>
          </div>
          <Routes>
            <Route path='/' element={<Welcome/>} />
            <Route path='counter' element={<Counter/>} />
            <Route path='users/:username' element={<ShowGithubUser/>} />
            <Route path='*' element={<h3>Not found</h3>}/>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
