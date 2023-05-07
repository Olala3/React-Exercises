import logo from './logo.svg';
import './App.css';
import {ClickCounter, ClickTracker, InteractiveWelcome, TodoList, UncontrolledLogin} from './Exercises'

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
        <UncontrolledLogin/>
        <TodoList
          render={(items, handleRemoveTodo) => (
            <ul>
              {items.map((item, index) => (
                <li key={index+item}>
                  {item}
                  <button onClick={() => handleRemoveTodo(index)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        />

      </header>
    </div>
  );
}

export default App;
