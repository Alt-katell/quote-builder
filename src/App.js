import React, {Component} from 'react';

import './App.css';

import Logo from './components/Logo/Logo';
import QuoteGenerator from './components/QuoteGenerator/QuoteGenerator';
import QuoteList from './components/QuoteList/QuoteList';

class App extends Component {
  state = {
    quotes: [],
    selectedQuote: null
  };

  componentDidMount() {
    fetch('https://quote-garden.herokuapp.com/api/v2/quotes?page=1&limit=10')
      .then(response => response.json())
      .then(data => {
        this.setState({
          quotes: data.quotes,
          selectedQuote: data.quotes[0]
        })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
        </header>
        <main>
          <div className="left">
            <QuoteGenerator selectedQuote={this.state.selectedQuote}/>
          </div>
          <div className="right">
            <input type="text" placeholder="Search a quote"/>
            <QuoteList quotes={this.state.quotes}/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
