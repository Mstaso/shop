import React from 'react'
import Movie from '../components/Movie'


function NominationContainer(props) {
    let nominationsToRender = []
    props.nominations.length >= 1 ?
    nominationsToRender = props.nominations.map(movie => <Movie movie={movie} nominationHandler={props.nominationHandler} key={movie.imdbID} removeFromNomination={props.removeFromNomination} />)
    :
    nominationsToRender = []
    return (
        <div class="col span-1-of-2">
            <div class="nomination-container">
            <h2>Nominations</h2>
            {nominationsToRender}
            </div>
        </div>
    )
}

export default NominationContainer;