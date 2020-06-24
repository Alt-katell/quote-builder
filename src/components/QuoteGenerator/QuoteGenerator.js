import React, {Component} from 'react';

class QuoteGenerator extends Component {
  render() {
    return(
      <div>
        <div className="quote-card-build">
          <div className="background-rectangle"></div>
          <p className="selected-quote">My quote here</p>
          <p className="selected-quote-author">Author</p>
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
                <p className="font cookie"></p>
                <p className="font playfair-display"></p>
                <p className="font raleway"></p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteGenerator;
