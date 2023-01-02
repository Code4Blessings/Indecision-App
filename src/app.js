console.log('App.js is running')

//JSX - JavaScript XML
const webApp = {
    title: 'Indecision App',
    subtitle: 'Put Your Life In the Hands of a Computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value
    if(option) {
        webApp.options.push(option);
        e.target.elements.option.value = '';
    }
    renderOptionsApp();
}



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

const removeAll = () => {
    webApp.options = []
    renderOptionsApp()
}

const appRoot = document.getElementById('app')

const numbers = [55, 101, 1000]

const renderOptionsApp = () => {
    const template = (
        <div>
            <h1>{webApp.title}</h1> 
            {webApp.subtitle && <p>{webApp.subtitle}</p>}
            {webApp.options.length > 0 ? <p>Here are your options</p> : 'No options'}
            
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    webApp.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol> 
            <form onSubmit={onFormSubmit}>
                <input
                type="text" 
                name= "option"/>
                <button>Add Option</button>
            </form>   
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderOptionsApp();




