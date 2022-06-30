console.log('App.js is running')

//JSX - JavaScript XML
var template = (
    <div>
        <h1>Indecision App</h1> 
        <p>This is some info</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
            <li>Item Three</li>
        </ol>
    </div>
);

var userName = 'Christine';
var userAge = 37

var templateTwo = (
    <div>
        <h1>{userName}</h1>
        <p>{userAge}</p>
        <p>Location: Lawrenceville</p>
    </div>
)

var appRoot = document.getElementById('app')

//ReactDOM.render takes in 2 arguments -- The JSX you want to render and the dom element
ReactDOM.render(templateTwo, appRoot);