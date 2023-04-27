import logo from './logo.svg';
import './App.css';
import {Counter, Welcome} from './Exercises'

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        
        <Welcome name='Ola' age= '29'/>
        <Counter initialValue={29} incrementAmount={10} incrementInterval={1000}/>

      </header>
    </div>
  );
}

export default App;
