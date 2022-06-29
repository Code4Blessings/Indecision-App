console.log('App.js is running')

//JSX - JavaScript XML
//var template = <p>This is JSX from app.js!</p>

var template = React.createElement(
    "h1", 
    {id: "someId"}, 
    "This is JSX from app.js!"
);

var appRoot = document.getElementById('app')

//ReactDOM.render takes in 2 arguments -- The JSX you want to render and the dom element
ReactDOM.render(template, appRoot);