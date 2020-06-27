import React from 'react';

// import htmlToImage from 'html-to-image';

import './QuoteGenerator.css';

const QuoteGenerator = (props) => {
    let backgroundColor = {
      background: props.selectedColor
    };

    let fontSize = "";

    switch (props.selectedFont) {
      case "'Cookie', cursive": fontSize = "28px"; break;
      default: fontSize = "20px";
    }

    let fontStyle = {
      fontFamily: props.selectedFont,
      fontSize: fontSize
    };

    return(
      <div className="quote-generator">
        <div id="quote-card" className="quote-card-build" style={backgroundColor}>
              <p className="selected-quote" style={fontStyle}>{props.selectedQuote.quoteText}</p>
              <p className="selected-quote-author">{props.selectedQuote.quoteAuthor}</p>
        </div>

        <button className="download-button">Download this quote</button>

        <div className="choose-styling">
          <div className="choose-color">
            <p>Background color</p>
            <div className="color-options">
              <div className="color-dot green" onClick={props.selectColor}></div>
              <div className="color-dot pink" onClick={props.selectColor}></div>
              <div className="color-dot yellow" onClick={props.selectColor}></div>
              <div className="color-dot coral" onClick={props.selectColor}></div>
              <div className="color-dot grey" onClick={props.selectColor}></div>
            </div>
          </div>

          <div className="choose-font">
            <p>Font</p>
              <div className="font-options">
                <p className="font cookie" onClick={props.selectFont}>Cookie</p>
                <p className="font playfair-display" onClick={props.selectFont}>Playfair Display</p>
                <p className="font raleway" onClick={props.selectFont}>Raleway</p>
              </div>
          </div>
        </div>
      </div>
    );
}

export default QuoteGenerator;
