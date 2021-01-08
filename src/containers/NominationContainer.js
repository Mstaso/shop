import React from 'react'
import Movie from '../components/Movie'


class NominationContainer extends React.Component {

    render() {
        let nominationsToRender = this.props.nominations.map(movie => <Movie movie={movie} nominationHandler={this.props.nominationHandler} key={movie.imdbID} removeFromNomination={this.props.removeFromNomination} />)
        return (
            <div className="Nomination-Container">
                <h2>Nominations</h2>
                {nominationsToRender}
            </div>
        )
    }
}

export default NominationContainer;