import React from 'react';

import './QuoteCard.css';

const QuoteCard = (props) => {
  let quoteCardClasses = ["quote-card"]
  if (props.selectedQuote === props.quote) {
    quoteCardClasses.push("selected")
  }

  return (
    <div className={quoteCardClasses.join(' ')} onClick={props.selectQuote}>
      <p className="quote">{props.quote.quoteText}</p>
      <p className="author">{props.quote.quoteAuthor}</p>
    </div>
  );
}

export default QuoteCard;
