import React from 'react'
import Movie from '../components/Movie'


class NominationContainer extends React.Component {

    render() {
        let nominationsToRender = this.props.nominations.map(movie => <Movie movie={movie} nominationHandler={this.props.nominationHandler} key={movie.imdbID} removeFromNomination={this.props.removeFromNomination} />)
        return (
            <div class="col span-1-of-2">
                <div class="nomination-container">
                <h2>Nominations</h2>
                {nominationsToRender}
                </div>
            </div>
        )
    }
}

export default NominationContainer;