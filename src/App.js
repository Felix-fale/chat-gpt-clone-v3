import './App.css';
import OptionSelection from './components/OptionSelection'


function App() {
  console.log(process.env.REACT_APP_OPEINAI_API_KEY);
  return (
    <div className="App">
      <OptionSelection/>
    </div>
  );
}

export default App;
