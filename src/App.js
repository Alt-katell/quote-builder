import React, {Component} from 'react';

import './App.css';

import Logo from './components/Logo/Logo';
import QuoteGenerator from './components/QuoteGenerator/QuoteGenerator';
import QuoteList from './components/QuoteList/QuoteList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
        </header>
        <main>
          <div className="left">
            <QuoteGenerator />
          </div>
          <div className="right">
            <QuoteList />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
