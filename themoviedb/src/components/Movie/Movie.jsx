import React from 'react';
import '../../App.css';

const Movie = ({movie, detailsMovie}) => {

  const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className={'movie-card'} onClick={ () => detailsMovie(movie)}>
        {movie.poster_path ? <img className={'movie-cover'} src={IMAGE_PATH + movie.poster_path}  alt={movie.title} /> : <div className={'movie-placeholder'}>No image found</div>}
        <h5 className={movie.title}> {movie.title} </h5>
        
    </div>
  )
}

export default Movie;