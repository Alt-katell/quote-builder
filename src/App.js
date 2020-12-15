import React, {Component} from 'react';

import './App.css';

import Logo from './components/Logo/Logo';
import QuoteGenerator from './components/QuoteGenerator/QuoteGenerator';
import QuoteCard from './components/QuoteCard/QuoteCard';

class App extends Component {
  state = {
    quotes: [],
    selectedQuote: "",
    search: "",
    selectedColor: "#69CCAE",
    selectedFont: "Raleway"
  };

  componentDidMount() {
    fetch('https://quote-garden.herokuapp.com/api/v3/quotes?page=1&limit=15')
      .then(response => response.json())
      .then(elements => {
        this.setState({
          quotes: elements.data,
          selectedQuote: elements.data[0]
        })
      })
  }

  selectQuoteHandler = (quote) => {
    this.setState({
      ...this.state,
      selectedQuote: quote})
  }

  searchHandler = (event) => {
    this.setState({
      ...this.state,
      search: event.target.value
    })
    fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?query=${event.target.value}&page=1&limit=15`)
      .then(response => response.json())
      .then(elements => {
        this.setState({
          ...this.state,
          quotes: elements.data
        })
      })
  }

  selectColorHandler = (event) => {
    let color = "";
    switch (event.target.classList.value) {
      case "color-dot green": color = "#69CCAE"; break;
      case "color-dot pink": color = "#EB8BB4"; break;
      case "color-dot yellow": color = "#F3C958"; break;
      case "color-dot coral": color = "#F68874"; break;
      default: color = "#BAD4D4";
    }

    this.setState({
      ...this.state,
      selectedColor: color
    })
  }

  selectFontHandler = (event) => {
    let font = "";
    switch (event.target.classList.value) {
      case "font cookie": font = "'Cookie', cursive"; break;
      case "font playfair-display": font = "'Playfair Display', serif"; break;
      default: font = "'Raleway', sans-serif";
    }

    this.setState({
      ...this.state,
      selectedFont: font
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
            selectedQuote={this.state.selectedQuote}
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
            <QuoteGenerator
              selectedQuote={this.state.selectedQuote}
              selectColor={this.selectColorHandler}
              selectedColor={this.state.selectedColor}
              selectFont={this.selectFontHandler}
              selectedFont={this.state.selectedFont}/>
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
          <a href="https://www.katellgoaer.com" target="_blank" rel="noopener noreferrer">© Katell GOAËR 2020</a>
        </footer>
      </div>
    );
  }
}

export default App;
