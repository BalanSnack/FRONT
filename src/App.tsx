import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import LongBtn from "@/components/atoms/LongBtn/LongBtn";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <LongBtn theme={"basic"} isSelected={false}>
        <div className="text-font1 p-2">
          <div className="font-suitSemiBold text-lg text-start">부적합한 주제</div>
          <div className="font-suitRegular text-start">
            다른 사용자에게 불쾌감을 주거나 논란을 야기할 수 있는 내용(선정적, 폭력적 등)
          </div>
        </div>
      </LongBtn>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
