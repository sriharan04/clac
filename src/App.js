import React, { useEffect } from "react";
import { useDataLayerValue } from "./DataLayer";
import "./App.css";
import Button from "./components/Button";
function App() {
  const [state, dispatch] = useDataLayerValue(null);
  let display = "";
  useEffect(() => {
    console.log(state.value, state.num1, state.num2);
  }, [state.value, state.num2, state.num1]);
  let inputlist = "";
  if (state.viewlist) {
    inputlist = state.viewlist.map((el) => {
      return <span>{el}</span>;
    });
  }
  return (
    <div className="calculator">
      <div className="container">
        <div className="inputs">{inputlist}</div>
        <div className="display">
          {!state.num2 ? state.value : state.num2}
          <span className="cursor" />
        </div>
        <Button st="btn" evt={() => dispatch({ type: "bc" })}>
          B
        </Button>
        <Button st="btn" evt={() => dispatch({ type: "ac" })}>
          C
        </Button>
        <Button st="btn" evt={() => dispatch({ type: "2", payload: "**" })}>
          x<sup>x</sup>
        </Button>
        <Button st="btn w" evt={() => dispatch({ type: "2", payload: "/" })}>
          /
        </Button>
        <Button st="btn" evt={() => dispatch({ type: "1", payload: "7" })}>
          7
        </Button>
        <Button st="btn" evt={() => dispatch({ type: "1", payload: "8" })}>
          8
        </Button>
        <Button st="btn" evt={() => dispatch({ type: "1", payload: "9" })}>
          9
        </Button>
        <Button st="btn w" evt={() => dispatch({ type: "2", payload: "*" })}>
          x
        </Button>
        <Button st="btn" evt={() => dispatch({ type: "1", payload: "4" })}>
          4
        </Button>
        <Button st="btn" evt={() => dispatch({ type: "1", payload: "5" })}>
          5
        </Button>
        <Button st="btn" evt={() => dispatch({ type: "1", payload: "6" })}>
          6
        </Button>
        <Button st="btn w" evt={() => dispatch({ type: "2", payload: "-" })}>
          -
        </Button>
        <Button st="btn" evt={() => dispatch({ type: "1", payload: "1" })}>
          1
        </Button>
        <Button st="btn" evt={() => dispatch({ type: "1", payload: "2" })}>
          2
        </Button>
        <Button st="btn" evt={() => dispatch({ type: "1", payload: "3" })}>
          3
        </Button>
        <Button st="btn w" evt={() => dispatch({ type: "2", payload: "+" })}>
          +
        </Button>
        <Button st="btn" evt={() => dispatch({ type: "2", payload: "+" })}>
          &plusmn;
        </Button>
        <Button st="btn zero" evt={() => dispatch({ type: "1", payload: "0" })}>
          0
        </Button>

        <Button st="btn" evt={() => dispatch({ type: "1", payload: "." })}>
          .
        </Button>
        <Button st="btn eq" evt={() => dispatch({ type: "3" })}>
          =
        </Button>
      </div>
    </div>
  );
}
export default App;
