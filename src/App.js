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

  changeHandler = (e) => {
    this.setState({ searchValue: e.target.value });
    this.fetchMovies(this.state.searchValue)
}

fetchMovies = (searchValue) => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=a682864d&s=${searchValue}`)
    .then(resp => resp.json())
    .then(movieData => {
        console.log(movieData)
        if (movieData.Response) {
            this.renderMovies(movieData);
        }
        
        })    
}

renderMovies = (movieArray) => {
  if (!movieArray.Search) {
  this.setState({movies: []});
  } else {
    this.setState({movies: movieArray.Search})
  }
}

nominationHandler = (movie) => {
let newNominations = [movie,...this.state.nominations]
this.setState({nominations: newNominations})

}

removeFromNomination = (movie) => {
let updatedNominations = this.state.nominations.filter(nomination => nomination.Title !== movie.Title)
this.setState({nominations: updatedNominations})
}

  render() {
    return (
      <div className="App">
        <h2>The Shoppies</h2>
        <Search searchValue={this.state.searchValue} changeHandler={this.changeHandler}/>
        <div className="center">
        <MovieContainer searchValue={this.state.searchValue} nominationHandler={this.nominationHandler} movies={this.state.movies}/>
        <NominationContainer removeFromNomination={this.removeFromNomination} nominations={this.state.nominations} />
        </div>
      </div>
    );
  }
  
}

export default App;
