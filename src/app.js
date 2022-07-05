console.log('App.js is running')

//JSX - JavaScript XML
const webApp = {
    title: 'Indecision App',
    subtitle: 'Created by Robin Warden',
    options: ['one', 'two']
}

const template = (
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

const user = {
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

let count = 0;
const addOne = () => {
    console.log('addOne')
}

const minusOne = () => {
    console.log('minusOne')
}

const reset = () => {
    console.log('reset')
}

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne} className='button'>+1</button>
        <button onClick={minusOne} className='button'>-1</button>
        <button onClick={reset} className='button'>reset</button>
    </div>
)

const appRoot = document.getElementById('app')

//ReactDOM.render takes in 2 arguments -- The JSX you want to render and the dom element
ReactDOM.render(templateTwo, appRoot);