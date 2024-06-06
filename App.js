  //NESTED STRUCTURE //

/* < div id ="parent">
 *       <div id ="child">
 *          <h1>I'm in h1</h1>
 *          <h2>I'm in h2</h2>
 *       </div>
 *  </div>

 ** ReactElement is Object **and this react obj becomes HTML that the browser understands.
     ReactElement(Object) => HTML(Browser Understands)
 ** // render => it takes the object put it up and convert it into heading tag and put it upon the DOM.**


*/

const parent = React.createElement(
    "div" , 
    {id : "parent"} , 

React.createElement(
    "div" , 
    {id : "child"} ,[
React.createElement("h1" , {} , "I'm inside h1 tag"),  // h1 ,h2 are siblings.
React.createElement("h2" , {} , "I'm inside h2 tag"),  // so take h1,h2 in array format.
]) 
);

console.log(parent);//parent => just a object(this obj is React Element)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // render => it takes the obj put it up and convert it into heading tag and put it upon the DOM.




// const heading = React.createElement(
// "h1" , 
// {id: "heading" } , 
// "Hello World From React!");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);





