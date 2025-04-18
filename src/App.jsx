import { useState } from "react";
import "./App.css";
import ThreeScene from "./ThreeScene.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          backgroundColor: "#fff499",
          width: "500px",
          height: "500px",
        }}
        id="canvas-container"
      >
        <ThreeScene />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
