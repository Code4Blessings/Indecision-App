# Indecision-App
Based on the Udemy React Course by Andrew Mead

**To Start Babel (On one terminal)**
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

**On the other terminal**
live-server public

## ReactDOM

- ReactDOM.render takes in 2 arguments -- The JSX you want to render and the dom element

## JSX

- React language which is a combination of html and Javascript.  This is translated by Babeljs so that it can be read properly by the browser.

see: https://babeljs.io/docs/en/

#### Challenge: Create a templateTwo var JSX 
- div
- h1 --> Robin Warden
- p -> Age: 26
- Render templateTwo instead of template

#### Challenge: Create app object title/subtitle
- user title/subtitle in the template
- render template
- test your work

#### Challenge: Conditional Statements
- Only render the subtitle  (and p tag) if the subtitle exist - logical and operator
- render a new p tag - if options.length > 0 "Here are your options" Less than 0, "no options"

#### Arrow Functions (solution found in src/playground/es6-arrow-function.js)
- getFirstName('Mike Smith')
- Create regular arrow function
- Create arrow function using shorthand syntax

