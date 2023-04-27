import logo from './logo.svg';
import './App.css';
import {Welcome} from './Exercises'

function App() {
  const name = <strong>Ola</strong>;
  const age = 25;

  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        
        <Welcome name={name} age= {age}/>

      </header>
    </div>
  );
}

export default App;
