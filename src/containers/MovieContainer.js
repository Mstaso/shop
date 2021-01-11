import React from 'react'
import Movie from '../components/Movie'


class MovieContainer extends React.Component {

    render() {
        console.log(this.props)
        let moviesToRender = this.props.movies.map(movie => <Movie movie={movie} nominationHandler={this.props.nominationHandler} key={movie.imdbID} />)
        return (
            <div class="col span-1-of-2">
                <div class="movie-container">
                <h2>Results for "{this.props.searchValue}"</h2>
                {moviesToRender}
                </div>
            </div>
        )
    }
}

export default MovieContainer;