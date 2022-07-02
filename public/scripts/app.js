'use strict';

console.log('App.js is running');

//JSX - JavaScript XML
var webApp = {
    title: 'Indecision App',
    subtitle: 'Created by Robin Warden'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        webApp.title
    ),
    React.createElement(
        'p',
        null,
        webApp.subtitle
    ),
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

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            location
        );
    } else {
        return undefined;
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    React.createElement(
        'p',
        null,
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

//ReactDOM.render takes in 2 arguments -- The JSX you want to render and the dom element
ReactDOM.render(templateTwo, appRoot);
