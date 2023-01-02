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
    renderOptionsApp();
};

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

var removeAll = function removeAll() {
    webApp.options = [];
    renderOptionsApp();
};

var appRoot = document.getElementById('app');

var numbers = [55, 101, 1000];

var renderOptionsApp = function renderOptionsApp() {
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
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            webApp.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
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
    ReactDOM.render(template, appRoot);
};

renderOptionsApp();
