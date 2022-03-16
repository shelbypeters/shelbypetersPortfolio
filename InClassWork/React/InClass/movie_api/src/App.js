import {Component} from 'react';
import './App.css';
import keys from './config/keys'
import axios from 'axios'

class App extends Component {

  // optional
  // only runs ONCE => sets up initial state - NEVER again
  // all changes are done OUTSIDE the constructor
  constructor(props) {
    // if parent? then run parent constructor first, THEN child constructor 
    // now we have acces to parent data/variables
    super(props); 
    // const [ movies, setMovies ] = useState([]);
    this.state = {
      movies: []
    }
  }

  performSearch = searchTerm => {
    const url = `https://api.themoviedb.org/3`
    const movieRoute = `/search/movie?api_key=${keys.tmdb_key}&query=${searchTerm}`
    const endpoint = url + movieRoute
    // fetch(endpoint)
    //  .then(response => {
    //    return response.json()
    //  })
    //  .then(searchResults => {
    //    // do something with searchResults
    //    if(searchResults.results) {
    //     //  setMovies(searchResults.results)
    //     this.setState(
    //       {
    //         movies: searchResults.results
    //       }
    //       )
    //    }
    //  })
     axios.get(endpoint)
     .then((searchResults) => {
       console.log(searchResults.data.results)
      if(searchResults.data.results) {
       this.setState(
         {
           movies: searchResults.data.results
         }
         )
      }
    })
     .catch(error => {
       console.error('Error coming from API:  ', error)
     })
  }

  searchChangeHandler = event => {
    console.log("I am the event", event.target.value);
    this.performSearch(event.target.value)
   }

  // mandatory!!!
  //happens EVERY time something (props or state) changes
  render() {
    return (
      <div>
      <h1>Movie Search</h1>
      <input 
        type="text" 
        placeholder="enter your movie"
        id="inputField" 
        onChange={this.searchChangeHandler}>
      </input>
      {
        this.state.movies.map((movie) => (
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
    )
  }

}

export default App;