import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment, decrement, login } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogin ? <h3>You have logged in</h3> : <h3>Please login</h3>}
      <button onClick={() => dispatch(login())}>login / logout</button>
    </div>
  );
}

export default App;
