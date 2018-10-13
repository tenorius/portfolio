import React from 'react';

const SpellingBee = ({text, tag, cssClass}) => {

    let CustomTag = tag;
    let textArray = text.split("");

    let elementsArray = textArray.map(char => (
        char === '*' ? <br/> : (
            <span className={cssClass}>
                {char}
            </span>
            )
    ));

    let speltElement = (
        <CustomTag>
            {elementsArray}
        </CustomTag>
    );

    return speltElement;
};

export default SpellingBee;