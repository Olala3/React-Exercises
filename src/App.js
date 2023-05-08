import logo from './logo.svg';
import './App.css';
import {ClickCounter, ClickTracker, DisplayLanguage, InteractiveWelcome, TodoList, UncontrolledLogin} from './Exercises'
import { LanguageContext } from './CreateContext';
import { useState } from 'react';

function App() {
  const [language, setLanguage] = useState('en');

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <LanguageContext.Provider value={language}>
      <div className="App">
        <header className="App-header">
        <DisplayLanguage handleChangeLanguage={handleChangeLanguage}/>
          
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
    </LanguageContext.Provider>
  );
}

export default App;
