import React from 'react';

import './QuoteCard.css';

const QuoteCard = (props) => {
  return (
    <div className="quote-card">
      <p className="quote">{props.quote}</p>
      <p className="author">{props.author}</p>
    </div>
  );
}

export default QuoteCard;
