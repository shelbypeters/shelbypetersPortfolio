import {data} from "./data"
import './App.css';

import Movie from "./components/Movie"

function App() {
  console.log(data)
  return (
    <div className="App">
      <h1>Hey</h1>
      <Movie image={data[0].image} title={data[0].title} director={data[0].director}/>
      <Movie image={data[1].image} title={data[1].title} director={data[1].director}/>
      <Movie image={data[2].image} title={data[2].title} director={data[2].director}/>
    </div>
  );
}

export default App;
