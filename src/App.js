import "./App.css";
import OptionSelection from "./components/OptionSelection";
import Translation from "./components/Translation";
import { arrayItems } from "./AIOptions";
import { useState } from "react";

function App() {
  const [option, setOption] = useState({});

  const [input, setInput] = useState("")

  // console.log(process.env.REACT_APP_OPEINAI_API_KEY);
  // console.log(arrayItems);

  const selectOption = (option) => {
    setOption(option);
  };

  const doStuff =()=>{

  }

  console.log(input);

  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation doStuff={doStuff} setInput={setInput} />
      )}
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=98bGwOYoEGg&list=WL&index=8&t=1697s   42m52s
