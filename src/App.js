import "./App.css";
import OptionSelection from "./components/OptionSelection";
import Translation from "./components/Translation";
import { arrayItems } from "./AIOptions";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

function App() {
  const [option, setOption] = useState({});
  const [input, setInput] = useState("");
  const [result, setResult] = useState("")

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPEINAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  // console.log(process.env.REACT_APP_OPEINAI_API_KEY);
  // console.log(arrayItems);

  const selectOption = (option) => {
    setOption(option);
  };

  const doStuff = async () => {
    // setOption({ ...option, prompt: input });
    let object = {...option, prompt: input}

    console.log(object);

    const response = await openai.createCompletion(object);
    setResult(response.data.choices[0].text);
  };

  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation doStuff={doStuff} setInput={setInput} result={result} />
      )}
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=98bGwOYoEGg&list=WL&index=8&t=1697s   42m52s
