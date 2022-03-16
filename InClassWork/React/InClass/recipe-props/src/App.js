import Recipe from './components/Recipe';
import RecipeList from './components/RecipeList';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <RecipeList />
    </div>
  );
}

export default App;
