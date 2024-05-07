//code with react

// const reactHeader = React.createElement(
//   "h1",
//   { className: "header", id: "divelement",children:"this is ok" },
//   "hello World!!"
// );
// console.log(reactHeader);

// code with JSX

//variable
// const reactHeader = (
//   <>
//     <h1>Hello World with JSX</h1>
//     <p>This is using the JSX</p>
//   </>
// );

//making component
function App() {

  return (
    <>
      <h1>Hello World with JSX</h1>
      <p>This is using the JSX</p>
    </>
  );
}

const Show = () => (
  <>
    <h1>This is show function</h1>
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Show />
  </>
);
