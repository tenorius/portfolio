import React, { Component } from 'react';
import './spellingBee.css';

class SpellingBee extends Component {
  state = {
    letters: new Array(this.props.text.split('').length),
  };

  letters = [];

  componentDidMount() {
    if (this.props.init) {
      this.peformAnimation();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.init !== prevProps.init) {
      this.peformAnimation();
    }
  }

  peformAnimation = () => {
    let time = this.props.delay;
    this.letters.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add('visible');
      }, time);
      time += 80;
    });
  };

  render() {
    const { text, tag, cssClass } = this.props;
    const CustomTag = tag;
    const textArray = text.split('');
    const elementsArray = textArray.map((char, index) => {
      switch (char) {
        case '*':
          return <br key={index} />;
        case ' ':
          return <span key={index}>&nbsp;</span>;
        default:
          return (
            <span
              key={index}
              ref={ref => this.letters[index] = ref}
              className={[cssClass, this.state.letters[index]].join(' ')}
            >
              {char}
            </span>
          );
      }
    });
    const speltElement = (
      <CustomTag>
        {elementsArray}
      </CustomTag>
    );
    return speltElement;
  }
}


export default SpellingBee;
