import './App.css';
import { useState } from 'react';
import keys from './config/keys'

function App() {

  const [ movies, setMovies ] = useState([])

   const performSearch = searchTerm => {
     const url = `https://api.themoviedb.org/3`
     const movieRoute = `/search/movie?api_key=${keys.tmdb_key}&query=${searchTerm}`
     const endpoint = url + movieRoute
     fetch(endpoint)
      .then(response => {
        return response.json()
      })
      .then(searchResults => {
        if(searchResults.results) {
          setMovies(searchResults.results)
        }
      })
      .catch(error => {
        console.error('Error coming from API:  ', error)
      })
   }

   const searchChangeHandler = event => {
     console.log("I am the event", event.target.value);
     performSearch(event.target.value)
    }

  return (
    <div>
      <h1>Movie Search</h1>
      <input 
        type="text" 
        placeholder="enter your movie"
        id="inputField" 
        onChange={searchChangeHandler}>
      </input>
      {
        movies.map(movie => (
          <div key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="poster" />
            <br/>
            <p>Title: {movie.title} </p>
            <br/>
            <p>Overview: {movie.overview} </p>
            <br/>
            <p>Release Date: {movie.release_date} </p>
            <br/>
            <p>Rating: {movie.vote_average} out of 10</p>  
            <br/>
          </div>
        ))
      }
    </div>
  );
}

export default App;
