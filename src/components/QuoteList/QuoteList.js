import React from 'react';

import QuoteCard from './QuoteCard/QuoteCard';

import './QuoteList.css';

const QuoteList = (props) => {
  const quoteList = props.quotes.map(quote =>
    <li key={quote._id}><QuoteCard quote={quote.quoteText} author={quote.quoteAuthor}/></li>
  );

  return (
    <ul className="quote-list">
      {quoteList}
    </ul>
  );
}

export default QuoteList;
