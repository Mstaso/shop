import React from 'react'

class Movie extends React.Component {

    clickHandler = (e) => {
        if(this.props.nominationHandler) {
            this.props.nominationHandler(this.props.movie)
            e.target.disabled = true;
        } else {
            this.props.removeFromNomination(this.props.movie)
        }
       
    }
    
    render() {
        return (
            <div class="movie-card">
                <h3>
                    {this.props.movie.Title}
                </h3>
                <p>
                    {this.props.movie.Year}
                </p>
                <figure class="movie-photo">
                <img src={this.props.movie.Poster}></img>
                </figure>
                {
                this.props.nominationHandler ? 
                <button onClick={this.clickHandler} class="movie-btn nominate"> Nominate </button>
                :
                <button onClick={this.clickHandler} class="movie-btn remove"> Remove </button>
                }
            </div>
        )
    }
}

export default Movie;