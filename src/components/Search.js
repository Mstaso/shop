import React from 'react'

class Search extends React.Component{

    render() {
        return(
            <div class="search-container row">
                <div class="search-bar">
                        <script src="https://use.fontawesome.com/3dfa0b83df.js"></script>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                        <label>Movie Title</label>
                        <input type="text" className="search-bar__input" placeholder="Search Movie Title" aria-label="search" value={this.props.searchValue} onChange={this.props.changeHandler}/>
                        <button className="search-btn"> <i class="fa fa-search"></i></button>      
                </div>
            </div>
        )
    }
}


export default Search; 