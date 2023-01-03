'use strict';

console.log('App is running');

var App = {
    title: 'Visibility Toggle',
    subTitle: 'These are some details you can now see!'
};

var onToggle = function onToggle() {};

var appRoot = document.getElementById('app');

var render = function render() {
    var template2 = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            App.title
        ),
        React.createElement(
            'button',
            { onClick: onToggle },
            'Show Details'
        )
    );
    ReactDOM.render(template2, appRoot);
};

render();
