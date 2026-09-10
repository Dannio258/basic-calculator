import { useState } from "react";
import "./App.css";
import Button from "./Button.jsx";
import OutputArea from "./OutputArea.jsx";

function App() {
  const [currentValue, setValue] = useState("");

  function HandleClick(event) {
    if (event.target.tagName !== "BUTTON") {
      return;
    }
    if (event.target.textContent === "←") {
      setValue((previousValue) => previousValue.slice(0, -1));
      return;
    }
    if (event.target.textContent === "C") {
      setValue("");
      return;
    }
    if (currentValue == "Error") {
      setValue("");
    }
    if (event.target.textContent === "=") {
      try {
        let expression = currentValue
          .replaceAll("×", "*")
          .replaceAll("÷", "/")
          .replaceAll("−", "-");

        const result = eval(expression);

        if (!Number.isFinite(result)) {
          setValue("Error");
          return;
        }

        setValue(String(Number(result.toFixed(2))));
      } catch (error) {
        console.error(error);
        setValue("Error");
      }
      return;
    }

    const clickedValue = event.target.textContent;

    setValue((previousValue) => previousValue + clickedValue);
  }

  return (
    <>
      <div className="w-full h-dvh flex justify-center items-center bg-gray-950">
        <div className="w-fit px-12 py-8 bg-gray-800 rounded-3xl flex flex-col items-center gap-5">
          <div className="w-0 min-w-full">
            <OutputArea value={currentValue} />
          </div>

          <div className="grid grid-cols-4 gap-1" onClick={HandleClick}>
            <Button className="col-span-2 bg-red-500 hover:bg-red-400">
              C
            </Button>
            <Button className="col-span-2 bg-slate-600 hover:bg-slate-500">
              ←
            </Button>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button className="bg-violet-700 hover:bg-violet-600">+</Button>

            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button className="bg-violet-700 hover:bg-violet-600">−</Button>

            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button className="bg-violet-700 hover:bg-violet-600">÷</Button>

            <Button>0</Button>
            <Button>.</Button>

            <Button className="bg-yellow-500 hover:bg-yellow-400">=</Button>

            <Button className="bg-violet-700 hover:bg-violet-600">×</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
