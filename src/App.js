import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    return {
      type: "INC",
    };
  };
  const decrement = () => {
    return {
      type: "DEC",
    };
  };
  const addBy = () => {
    return {
      type: "ADD",
      payload: 10,
    };
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(addBy())}>Add by 10</button>
    </div>
  );
}

export default App;
