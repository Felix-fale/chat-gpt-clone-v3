import './App.css';
import OptionSelection from './components/OptionSelection'
import { arrayItems } from './AIOptions';


function App() {
  // console.log(process.env.REACT_APP_OPEINAI_API_KEY);
  console.log(arrayItems);
  return (
    <div className="App">
      <OptionSelection arrayItems={arrayItems} />
    </div>
  );
}

export default App;
