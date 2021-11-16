//import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import Main from '../Main/Main';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to React</h1>
        </header>
        
        <Main/>        
        {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a> */}
      </div>
    );
  }
}

export default App;
