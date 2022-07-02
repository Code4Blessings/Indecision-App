console.log('App.js is running')

//JSX - JavaScript XML
var webApp = {
    title: 'Indecision App',
    subtitle: 'Created by Robin Warden',
    options: ['one', 'two']
}

var template = (
    <div>
        <h1>{webApp.title}</h1> 
        {webApp.subtitle && <p>{webApp.subtitle}</p>}
        {webApp.options.length > 0 ? <p>Here are your options</p> : 'No options'}
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>    
    </div>
);

var user = {
    name: 'Christine',
    age: 25,
    location: 'Lawrenceville',
}

const getLocation = (location) => {
    if(location) {
        return <p>{location}</p>
    }else {
        return undefined;
    }
}

var templateTwo = (
    <div>
        <h1>{user.name? user.name: 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)

var appRoot = document.getElementById('app')

//ReactDOM.render takes in 2 arguments -- The JSX you want to render and the dom element
ReactDOM.render(template, appRoot);