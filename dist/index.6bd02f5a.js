/* <div>
    <div>
        <h1></h1>
        <h2></h2>
        <h3></h3>   
         </div>
</div>  how to create this structure in react */ const divDig = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {
        id: "h1"
    }, "This is the first nested h1 tag"),
    React.createElement("h2", {
        id: "h2"
    }, "This is the second nested h2 tag"),
    React.createElement("p", {
        id: "p"
    }, "this is the p tag")
]));
console.log(divDig);
//const heading = React.createElement("h1", {id: "heading"}, "Hello World using Reach for the first time");
//const para = React.createElement("p",{},"This time you have to do something , take it as a last chance.")
const root = ReactDOM.createRoot(document.getElementById("root"));
//const head = ReactDOM.createRoot(document.getElementsByName("h1"))
root.render(divDig); //head.render(para);

//# sourceMappingURL=index.6bd02f5a.js.map
