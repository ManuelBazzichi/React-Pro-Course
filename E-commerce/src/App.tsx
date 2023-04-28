import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="text-4xl bg-red-500">Hello</div>
      </div>
    </>
  );
}

export default App;
