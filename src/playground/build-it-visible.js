console.log('App is running')

const App = {
    title: 'Visibility Toggle',
    subTitle: 'These are some details you can now see!'
}


const onToggle = () => {
    
}

const appRoot = document.getElementById('app')

const render = () => {
    const template2 = (
        <div>
            <h1>{App.title}</h1>
            <button onClick={onToggle}>Show Details</button>
        </div>
    );
     ReactDOM.render(template2, appRoot);
}

render();