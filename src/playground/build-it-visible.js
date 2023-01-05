console.log('App is running')

const App = {
    title: 'Visibility Toggle',
    subTitle: 'These are some details you can now see!',
    details: []
}

let toggle = 'Show Details'
const onToggle = () => {
    toggle = 'Hide Details'
    render()
}

const onShowDetails = (e) => {
    e.preventDefault();
    e.target.details = '';
}


const appRoot = document.getElementById('app')

const render = () => {
    const template2 = (
        <div>
            <h1>{App.title}</h1>
            <form onSubmit={onShowDetails}>
                <button onClick={onToggle} className='button'>{toggle}</button>
                <p>{App.subTitle}</p>
                {
                    [23, 35, 56]
                }  
            </form> 
        </div>
        
    );
     ReactDOM.render(template2, appRoot);
}

render();