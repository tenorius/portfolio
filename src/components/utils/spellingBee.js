import React, {Component} from 'react';
import './spellingBee.css'

class SpellingBee extends Component {


    state = {
        letters: new Array(this.props.text.split("").length)
    };

    letters = [];

    componentDidUpdate(prevProps) {
        if (this.props.init !== prevProps.init) {
            let time = this.props.delay;
            console.log(this.state);
            this.letters.forEach((span, index) => {
                setTimeout(() => {
                    this.setState(({letters}) => ({
                        letters: [
                            ...letters.slice(0,index),
                            'visible',
                            ...letters.slice(index+1)
                        ]
                    }));
                    console.log(this.state);
                }, time);
                time = time + 80;
            })
        }
    }

    render() {
        let {text, tag, cssClass} = this.props;
        let CustomTag = tag;
        let textArray = text.split("");
        let elementsArray = textArray.map((char, index) => {
                return char === '*' ? <br key={index}/> : (
                    <span key={index} ref={(ref) => this.letters[index] = ref} className={[cssClass, this.state.letters[index]].join(" ")}>{char}</span>)
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