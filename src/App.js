import './App.css';
import './Grid.css';
import React from 'react'
import MovieContainer from './containers/MovieContainer'
import NominationContainer from './containers/NominationContainer'
import Search from './components/Search'

class App extends React.Component {

  state = {
    movies: [],
    nominations: [],
    searchValue: ''
  }

  componentDidMount() {
    const storedNominations = JSON.parse(localStorage.getItem("nominations"));
    if(storedNominations) {
      this.setState({
        nominations: storedNominations
      });
    };
    
  }

  searchHandler = (e) => {
    this.setState({ searchValue: e.target.value });
    this.fetchMovies(this.state.searchValue);
}

fetchMovies = (searchValue) => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=a682864d&s=${searchValue}`)
    .then(resp => resp.json())
    .then(movieData => {
        if (movieData.Response) {
            this.renderMovies(movieData);
        }
        
        });    
}

renderMovies = (movieArray) => {
  !movieArray.Search ? this.setState({movies: []}) :  this.setState({movies: movieArray.Search}); 
}

nominationHandler = (nominatedMovie) => {  
let newNominations = [nominatedMovie,...this.state.nominations];
let updatedMovieList = this.state.movies.filter(movie => movie !== nominatedMovie);
this.setState({
  nominations: newNominations,
  movies: updatedMovieList
});
localStorage.setItem('nominations', JSON.stringify(newNominations));
}

removeFromNomination = (movie) => {
let updatedNominations = this.state.nominations.filter(nomination => nomination !== movie);
this.setState({nominations: updatedNominations});
localStorage.setItem('nominations', JSON.stringify(updatedNominations));
}

nominationTitles = () => {
  return this.state.nominations.map(nomination => <li>{nomination.Title}</li>);
}

bannerHandler = () => {
  this.setState({
    nominations: [],
    movies: [],
    searchValue: ''
  });
  localStorage.removeItem('nominations');
}

  render() {
    return (
    <div className="App">
        <div class="row">
        <h1>The Shoppies</h1>
        <ion-icon name="paper-plane-outline" class="paper-plane-icon"></ion-icon>
        </div>
        <Search searchValue={this.state.searchValue} searchHandler={this.searchHandler}/>
        <div class="row">
        <MovieContainer searchValue={this.state.searchValue} nominationHandler={this.nominationHandler} movies={this.state.movies}/>
        <NominationContainer removeFromNomination={this.removeFromNomination} nominations={this.state.nominations} />
        {this.state.nominations.length >= 5 ?
        <div id="overlay">
          <div class="banner">
            <h2>Thank you for your nominations</h2>
            <ul>
              {this.nominationTitles()}
            </ul>
            <ion-icon onClick={this.bannerHandler}class="x-icon" name="close-outline"></ion-icon>
          </div>
        </div>
          :
        <div></div>  
        }
        </div>
      </div>
  
    
    );
  }
  
}

export default App;
