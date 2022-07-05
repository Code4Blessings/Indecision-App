'use strict';

console.log('App.js is running');

//JSX - JavaScript XML
var webApp = {
    title: 'Indecision App',
    subtitle: 'Created by Robin Warden',
    options: ['one', 'two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        webApp.title
    ),
    webApp.subtitle && React.createElement(
        'p',
        null,
        webApp.subtitle
    ),
    webApp.options.length > 0 ? React.createElement(
        'p',
        null,
        'Here are your options'
    ) : 'No options',
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

var user = {
    name: 'Christine',
    age: 25,
    location: 'Lawrenceville'
};

var getLocation = function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            location
        );
    } else {
        return undefined;
    }
};

var count = 0;
var addOne = function addOne() {
    console.log('addOne');
};

var minusOne = function minusOne() {
    console.log('minusOne');
};

var reset = function reset() {
    console.log('reset');
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne, className: 'button' },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne, className: 'button' },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: reset, className: 'button' },
        'reset'
    )
);

var appRoot = document.getElementById('app');

//ReactDOM.render takes in 2 arguments -- The JSX you want to render and the dom element
ReactDOM.render(templateTwo, appRoot);
