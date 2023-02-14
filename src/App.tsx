import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { addThunk } from './thunks';


function App() {
  const count: number = useSelector(
    (state: AppState) => state.count,
  )

  const dispatch: Dispatch<any> = useDispatch()
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>You clicked the button {String(count)} times! </p>
        <button onClick={() => dispatch(addThunk())}>Click me</button>
      </header>
    </div>
  );
}

export default App;
