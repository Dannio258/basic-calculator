import { useState } from "react";
import "./App.css";
import Button from "./Button.jsx";
import OutputArea from "./OutputArea.jsx";

function App() {

const [currentValue, setValue] = useState('');

function HandleClick (event){
  if (event.target.tagName !== "BUTTON"){
    return;
  }

  const clickedValue = event.target.textContent;

  setValue((previousValue) =>  previousValue + clickedValue);
}

  return (
    <>
      <div className="w-full h-dvh flex justify-center items-center bg-gray-400">
        <div className="w-115 px-12 py-8 bg-gray-800 rounded-3xl flex flex-col items-center gap-5">
          <OutputArea value={currentValue}></OutputArea>

          <div className="grid grid-cols-4 gap-1" onClick={HandleClick}>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>+</Button>

            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>−</Button>

            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>÷</Button>

            <div />
            <Button>0</Button>
            <div />
            <Button>×</Button>
          </div>
        </div>
      </div>
      x
    </>
  );
}

export default App;
