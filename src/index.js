import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/login'
import Dashboard from './components/Dashboard.js'
import './styles/components/header.css'
import './styles/style.css';
import {StateProvider, useStateValue} from './StateProvider'
import reducer, {initialState} from './reducer'
// import {useStateValue} from './StateProvider'


const App = () =>{
    const [{user}, dispatch] = useStateValue();
    return(
        <div className="App">
            {!user ? (
                <Login/>
            ) : (
                <div>
                <Dashboard/>
                </div>
            )}
        </div>
    );
}

ReactDOM.render(
  <React.StrictMode>
  <StateProvider initialState=
    {initialState} reducer={reducer}>
  <App/>
  </StateProvider>
  </React.StrictMode>, 
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

