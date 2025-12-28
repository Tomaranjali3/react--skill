/**
 *  
 *  <div id="parent">
 *      <div id="child1">
 *          <h1 id="heading">Hello World from React!</h1>
 *          <h2>This is h2 tag</h2>
 *           </div>     
 * </div>
 * 
 * 
 * ReactElement (object)  ---> HTML (Browser Understands)
 */
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        {id: "child1"},[
        React.createElement( "h1",{}, "I am h1 tag from React" ),
        React.createElement( "h2",{}, "I am h2 tag from React" ),
        ]),
    React.createElement(
        "div",
        { id: "child2" },
        React.createElement( "h1",{}, "I am h1 tag from React" ),
        React.createElement( "h2",{}, "I am h2 tag from React" ),
    )
        
);

const heading = React.createElement(
        "h1",
        { id: "heading" },
        "Hello World from React!"
    );

// JSX

// create root inside the react 
console.log(parent);  

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);