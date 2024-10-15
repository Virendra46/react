const heading= React.createElement('div',{id:'parent'},
    [React.createElement('div',{id:'child1'},[
        React.createElement('h1',{},"I am the h1"),
        React.createElement('h2',{},"I am the h2")]),
    React.createElement('div',{id:'child2'},[
            React.createElement('h1',{},"I am the h1"),
            React.createElement('h2',{},"I am the h2")]),
    ]);
const root= ReactDOM.createRoot(document.getElementById('root'));
console.log(heading);
console.log(React);
root.render(heading);