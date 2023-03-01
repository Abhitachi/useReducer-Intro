import react, { useReducer } from "react";

const initialstate = { Firstcount: 2, Secondcount: 5 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, Firstcount: state.Firstcount + action.value };
    case "decrement":
      return { ...state, Firstcount: state.Firstcount - action.value };
    case "reset":
      return initialstate;
    case "incrementby5":
      return { ...state, Secondcount: state.Secondcount + action.value };
    case "decrementby5":
      return { ...state, Secondcount: state.Secondcount - action.value };
    default:
      return { state };
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialstate);

  return (
    <div>
      <div>
        FirstCount:{count.Firstcount}
        SecondCounter:{count.Secondcount}
      </div>
      <button onClick={() => dispatch({ type: "increment", value: 2 })}>
        Incrementcounter2
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 2 })}>
        decrementcounter2
      </button>
      <button onClick={() => dispatch({ type: "incrementby5", value: 5 })}>
        Incrementcounter5
      </button>
      <button onClick={() => dispatch({ type: "decrementby5", value: 5 })}>
        decrementcounter5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Resetcounter</button>
    </div>
  );
}
export default CounterTwo;
