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
        console.log(this.props.movie)
        return (
            <div>
                <h1>
                    {this.props.movie.Title}
                </h1>
                <p>
                    {this.props.movie.Year}
                </p>
                {/* <img src={this.props.movie.Poster}></img> */}
                {
                this.props.nominationHandler ? 
                <button onClick={this.clickHandler}> Nominate </button>
                :
                <button onClick={this.clickHandler}> Remove </button>
                }
            </div>
        )
    }
}

export default Movie;