import React, {Component} from 'react';
import './spellingBee.css'

class SpellingBee extends Component {
  
  
  state = {
    letters: new Array(this.props.text.split("").length)
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
        this.setState(({letters}) => ({
          letters: [
            ...letters.slice(0, index),
            'visible',
            ...letters.slice(index + 1)
          ]
        }));
      }, time);
      time = time + 80;
    })
  };
  
  render() {
    let {text, tag, cssClass} = this.props;
    let CustomTag = tag;
    let textArray = text.split("");
    let elementsArray = textArray.map((char, index) => {
        switch (char) {
          case '*':
            return <br key={index} />;
          case  ' ':
            return <span key={index}>&nbsp;</span>;
          default:
            return (
              <span key={index} ref={(ref) => this.letters[index] = ref}
                    className={[cssClass, this.state.letters[index]].join(" ")}>{char}
                  </span>
            )
        }
      }
    );
    let speltElement = (
      <CustomTag>
        {elementsArray}
      </CustomTag>
    );
    return speltElement;
  }
}


export default SpellingBee;