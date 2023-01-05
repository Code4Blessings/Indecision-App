'use strict';

console.log('App is running');

var App = {
    title: 'Visibility Toggle',
    subTitle: 'These are some details you can now see!',
    details: []
};

var toggle = 'Show Details';
var onToggle = function onToggle() {
    toggle = 'Hide Details';
    render();
};

var onShowDetails = function onShowDetails(e) {
    e.preventDefault();
    e.target.details = '';
};

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
            'form',
            { onSubmit: onShowDetails },
            React.createElement(
                'button',
                { onClick: onToggle, className: 'button' },
                toggle
            ),
            React.createElement(
                'p',
                null,
                App.subTitle
            ),
            [23, 35, 56]
        )
    );
    ReactDOM.render(template2, appRoot);
};

render();
