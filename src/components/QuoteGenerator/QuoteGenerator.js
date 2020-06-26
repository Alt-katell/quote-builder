import React, {Component} from 'react';

import './QuoteGenerator.css';

class QuoteGenerator extends Component {
  render() {
    let squareStyle = {
      background: '#69CCAE'
    }

    return(
      <div className="quote-generator">
        <div className="quote-card-build">
          <div className="background-rectangle" style={squareStyle}></div>
            <div className="quote-and-author">
              <p className="selected-quote">{this.props.selectedQuote.quoteText}</p>
              <p className="selected-quote-author">{this.props.selectedQuote.quoteAuthor}</p>
            </div>
        </div>

        <button className="download-button">Download this quote</button>

        <div className="choose-styling">
          <div className="choose-color">
            <p>Background color</p>
            <div className="color-options">
              <div className="color-dot green"></div>
              <div className="color-dot pink"></div>
              <div className="color-dot yellow"></div>
              <div className="color-dot coral"></div>
              <div className="color-dot grey"></div>
            </div>
          </div>

          <div className="choose-font">
            <p>Font</p>
              <div className="font-options">
                <p className="font cookie">Cookie</p>
                <p className="font playfair-display">Playfair Display</p>
                <p className="font raleway">Raleway</p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteGenerator;
