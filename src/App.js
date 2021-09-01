import Header from "./components/Header"
import Upper from "./components/Upper"
import Slider from "./components/Slider"
import Lower from "./components/lower"
import {Datal} from './components/SliderDataL'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header className="header" />
      <Slider slides = {Datal} />
      <Lower />
    </div>
  );
}

export default App;
