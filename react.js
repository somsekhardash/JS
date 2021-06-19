// When Hooks Got Introduced - React 16.8

// If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as
// componentDidMount, componentDidUpdate, and componentWillUnmount combined.

/******************************************************************************************/
// React when there is a parent compoent is re-rendered all the child component got re-rendered.
//eXample

//Parent Component
function App() {
  const [state, setstate] = React.useState(0);
  return (
    <div className="App">
      <button onClick={() => setstate(state + 1)}>{state}</button>
      <ChildComponent state={state} />
    </div>
  );
}
//Child compoent
function Child({ state }) {
  useEffect(() => {
    console.log("data");
  }, []);
  return <div>{`${id} ${state}`}</div>;
}
// You will see while updating the parent compoent the child is also getting re-rendered.
// To avoid this we can use Pure compoent / React.memo

/***************************************/
// what is the empty array in useEffect

// empty array means whatever effect we are going to write in it is going to execute once
//when the compoent will be rendered. But when the compoent will get rerendered this will
//not be executed.

// but if you are not going to give any parameter to the array then this is going to
// execute the effect when ever we will rerender it.

/****************************************/

// why we use immutable state
// other wise the pure compoent will not work. this will get re-render always.
