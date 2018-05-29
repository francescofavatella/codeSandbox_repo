import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Immutable from "immutable";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => {
  const print = obj => JSON.stringify(obj, undefined, 2);
  console.log("----- Testing Merge ------");
  const vArr1 = { a: [1, 2, 3] };
  const vArr2 = { b: [4, 5, 6] };
  console.log("vArr1:", vArr1);
  console.log("vArr2:", vArr2);

  const iArr = Immutable.fromJS(vArr1);
  const mergedObj = iArr.merge(vArr2);
  console.log("mergedObj:", mergedObj.toJS());
  return (
    <div style={styles}>
      <Hello name="CodeSandbox" />
      <h2>Immutable.js Playground: open your console tab {"\u2728"}</h2>

      {print(mergedObj)}
    </div>
  );
};

render(<App />, document.getElementById("root"));
