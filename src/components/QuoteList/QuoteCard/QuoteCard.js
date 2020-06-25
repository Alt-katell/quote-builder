import React from 'react';

const QuoteCard = (props) => {
  return (
    <div>
      <p>{props.quote}</p>
      <p>{props.author}</p>
    </div>
  );
}

export default QuoteCard;
