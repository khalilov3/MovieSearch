import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList'


class MovieResult extends Component {

    render() {
        //getting the movies searched 
        const movies = this.props.movies;
        console.log("movies: " + JSON.stringify(movies))
        //fetching them once we get them 
        if (movies && movies.length) {
            return (
                <GridList cols={3}>
                    {movies.map((movie, i) => {
                        //showing the movies searched in a grid with their image and title
                        return (<a href={movie.show.url} target="_blank" >
                            <GridTile
                                title={movie.show.name}
                                key={i}
                            >
                                <img src={movie.show.image.original} alt="" />

                            </GridTile>
                        </a>)
                    })}

                </GridList>

            )
        } else {
            return (<div></div>);
        }


    }
}

MovieResult.propTypes = {
    movies: PropTypes.array.isRequired
}

export default MovieResult