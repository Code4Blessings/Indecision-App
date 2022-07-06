'use strict';

console.log('App.js is running');

//JSX - JavaScript XML
var webApp = {
    title: 'Indecision App',
    subtitle: 'Put Your Life In the Hands of a Computer',
    options: []
};
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        webApp.options.push(option);
        e.target.elements.option.value = '';
    }
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
        'p',
        null,
        webApp.options.length
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
    ),
    React.createElement(
        'form',
        { onSubmit: onFormSubmit },
        React.createElement('input', {
            type: 'text',
            name: 'option' }),
        React.createElement(
            'button',
            null,
            'Add Option'
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

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
