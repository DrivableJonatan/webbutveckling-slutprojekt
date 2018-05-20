import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let data = this.props.data;
        let img_width = 200;
        let img_height = 300;
        let img_path = 'https://image.tmdb.org/t/p/w' + 500 + data.poster_path;
        return (
            <div className="movie-wrapper" style={{backgroundImage: "url("+img_path+")", backgroundSize: "100%", backgroundRepeat: "no-repeat", width: img_width, height: img_height}}>
                <div className="temp">
                    <div className="moviet">{data.title}</div>
                    <p>Release date: {data.release_date}</p>
                    <p>TMDB score: {data.vote_average}</p>
                    <button className="button" onClick={() => this.props.showModal(data.id)}>More info</button>
                    <button className="button">Add to watchlist</button>
                </div>
            </div>
        );
    }
}

export default Movie;
