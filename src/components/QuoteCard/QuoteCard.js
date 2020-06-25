import React from 'react';

import './QuoteCard.css';

const QuoteCard = (props) => {
  return (
    <div className="quote-card" onClick={props.selectQuote}>
      <p className="quote">{props.quote.quoteText}</p>
      <p className="author">{props.quote.quoteAuthor}</p>
    </div>
  );
}

export default QuoteCard;
