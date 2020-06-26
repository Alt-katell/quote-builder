import React, {Component} from 'react';

import './QuoteGenerator.css';

class QuoteGenerator extends Component {
  render() {
    let backgroundColor = {
      background: this.props.selectedColor
    };

    let fontSize = "";

    switch (this.props.selectedFont) {
      case "'Cookie', cursive": fontSize = "26px"; break;
      default: fontSize = "20px";
    }

    let fontStyle = {
      fontFamily: this.props.selectedFont,
      fontSize: fontSize
    };

    return(
      <div className="quote-generator">
        <div className="quote-card-build" style={backgroundColor}>
              <p className="selected-quote" style={fontStyle}>{this.props.selectedQuote.quoteText}</p>
              <p className="selected-quote-author">{this.props.selectedQuote.quoteAuthor}</p>
        </div>

        <button className="download-button">Download this quote</button>

        <div className="choose-styling">
          <div className="choose-color">
            <p>Background color</p>
            <div className="color-options">
              <div className="color-dot green" onClick={this.props.selectColor}></div>
              <div className="color-dot pink" onClick={this.props.selectColor}></div>
              <div className="color-dot yellow" onClick={this.props.selectColor}></div>
              <div className="color-dot coral" onClick={this.props.selectColor}></div>
              <div className="color-dot grey" onClick={this.props.selectColor}></div>
            </div>
          </div>

          <div className="choose-font">
            <p>Font</p>
              <div className="font-options">
                <p className="font cookie" onClick={this.props.selectFont}>Cookie</p>
                <p className="font playfair-display" onClick={this.props.selectFont}>Playfair Display</p>
                <p className="font raleway" onClick={this.props.selectFont}>Raleway</p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteGenerator;
