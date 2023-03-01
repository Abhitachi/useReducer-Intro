import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <CounterOne />
      <hr />
      <CounterTwo />
      <hr />
      <CounterThree />
    </div>
  );
}
