import logo from './logo.svg';
import './App.css';
import {Welcome} from './Exercises'

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        
        <Welcome name='Ola' age= '29'/>

      </header>
    </div>
  );
}

export default App;
