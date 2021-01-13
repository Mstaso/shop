import React from 'react'
import Movie from '../components/Movie'

function MovieContainer(props) {
    let moviesToRender = props.movies.map(movie => <Movie movie={movie} nominationHandler={props.nominationHandler} key={movie.imdbID} />)
    return (
        <div class="col span-1-of-2">
            <h2>Results for "{props.searchValue}"</h2>
            {moviesToRender}
        </div>
    )
}

export default MovieContainer;