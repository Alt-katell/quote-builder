import React, {Component} from 'react';

import './App.css';

import Logo from './components/Logo/Logo';
import QuoteGenerator from './components/QuoteGenerator/QuoteGenerator';
import QuoteCard from './components/QuoteCard/QuoteCard';

class App extends Component {
  state = {
    quotes: [],
    selectedQuote: "",
    search: ""
  };

  componentDidMount() {
    fetch('https://quote-garden.herokuapp.com/api/v2/quotes?page=1&limit=15')
      .then(response => response.json())
      .then(data => {
        this.setState({
          quotes: data.quotes,
          selectedQuote: data.quotes[2]
        })
      })
  }

  selectQuoteHandler = (quote) => {
    this.setState({
      ...this.state,
      selectedQuote: quote})
  }

  searchHandler = (event) => {
    console.log(event.target.value)
    this.setState({
      ...this.state,
      search: event.target.value
    })
    fetch(`https://quote-garden.herokuapp.com/api/v2/quotes/${event.target.value}?page=1&limit=15`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          ...this.state,
          quotes: data.quotes
        })
        console.log(this.state.quotes)
      })

  }

  render() {
    let quoteList = <p>No result for "{this.state.search}"</p>
    if (this.state.quotes.length > 0) {
      quoteList = this.state.quotes.map(quote =>
        <li key={quote._id}>
          <QuoteCard
            quote={quote}
            selectQuote={() => this.selectQuoteHandler(quote)}
            />
        </li>
      );
    }

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
            <input
              className="search"
              type="text"
              placeholder="Search a quote"
              onChange={this.searchHandler}
              value={this.state.search}/>
            <ul className="quote-list">
              {quoteList}
            </ul>
          </div>
        </main>
        <footer>
          <p>© Katell GOAËR 2020</p>
        </footer>
      </div>
    );
  }
}

export default App;
