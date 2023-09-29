import { evaluate } from "mathjs";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [display, setDisplay] = useState("");
  const [prevAns, setPrevAns] = useState("");
  const buttons = [
    { value: "^", type: "operator" },
    { value: " ", type: "blank" },
    { value: "%", type: "operator" },
    { value: "ANS", type: "operator" },

    { value: "√", type: "operator" },
    { value: "(", type: "operator" },
    { value: ")", type: "operator" },
    { value: "+", type: "operator" },

    { value: 9, type: "number" },
    { value: 8, type: "number" },
    { value: 7, type: "number" },
    { value: "-", type: "operator" },

    { value: 6, type: "number" },
    { value: 5, type: "number" },
    { value: 4, type: "number" },
    { value: "*", type: "operator" },

    { value: 3, type: "number" },
    { value: 2, type: "number" },
    { value: 1, type: "number" },
    { value: "/", type: "operator" },

    { value: 0, type: "number" },
    { value: ".", type: "number" },

    { value: "C", type: "clear" },
    { value: "=", type: "equals" },
  ];

  const handleBtnClick = (value) => {
    if (value === "=") {
      const result = evaluate(display);
      setDisplay(result);
      setPrevAns(result.toString());
    } else if (value === "C") {
      setDisplay("");
    } else if (value === "ANS") {
      setDisplay(prevAns);
    } else if (value === "√") {
      setDisplay(Math.sqrt(display));
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="calc-container">
      <div className="calc">
        <div className="display">{display}</div>
        <div className="buttons">
          {buttons.map((button, index) => {
            return (
              <button
                key={index}
                onClick={() => handleBtnClick(button.value)}
                className={
                  button.type === "number" ? "number-button" : "operator-button"
                }
              >
                {button.value}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
