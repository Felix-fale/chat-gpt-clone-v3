import "./App.css";
import OptionSelection from "./components/OptionSelection";
import Translation from "./components/Translation";
import { arrayItems } from "./AIOptions";
import { useState } from "react";

function App() {
  const [option, setOption] = useState({});

  // console.log(process.env.REACT_APP_OPEINAI_API_KEY);
  // console.log(arrayItems);

  const selectOption = (option) => {
    setOption(option);
  };
  console.log(Object.values(option));

  return (
    <div className="App">
      <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      <Translation />
    </div>
  );
}

export default App;
