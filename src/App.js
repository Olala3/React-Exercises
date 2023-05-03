import logo from './logo.svg';
import './App.css';
import {ClickCounter, ClickTracker, InteractiveWelcome, Login} from './Exercises'

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        
        {/* <Welcome name='Ola' age= '29'/> */}
        {/* <Counter initialValue={29} increment={10} interval={1000}/> */}
        <ClickCounter/>
        <ClickTracker/>
        <InteractiveWelcome/>
        <Login/>

      </header>
    </div>
  );
}

export default App;
