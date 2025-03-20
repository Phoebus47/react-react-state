import "./App.css";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Greeting Message");

  const switchToHi = () => {
    setMessage("Hi!");
  };

  const switchToThai = () => {
    setMessage("สวัสดี!");
  };

  const switchToChinese = () => {
    setMessage("你好!");
  };

  return (
    <div className="App">
      <div className="greeting-container">{message}</div>
      <div className="buttons">
        <button onClick={switchToThai}>สวัสดี!</button>
        <button onClick={switchToHi}>Hi!</button>
        <button onClick={switchToChinese}>你好!</button>
      </div>
    </div>
  );
}

export default App;
