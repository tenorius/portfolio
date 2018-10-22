module.exports = {
    parser : "babel-eslint",
    extends: "airbnb",
    env: {
        "browser": true,
        "jest": true
    },
    rules: {
        // "skipBlankLines": 1,
        "react/prop-types": 0,
        "linebreak-style": 0,
        "react/jsx-filename-extension": 0,
        "react/destructuring-assignment": 0,
        "jsx-a11y/label-has-for": 0,
        "react/forbid-prop-types": 0,
        "object-curly-newline": 0,
    }
};