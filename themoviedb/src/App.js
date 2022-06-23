import React, {useEffect, useState} from 'react';
import axios from 'axios';

import Movie from './components/Movie/Movie';

import './App.css';
/*<img className='image-drop' src={BACKDROP_PATH + detailsMovie.backdrop_path} alt='No available'/>*/

function App() {

  const API_KEY = 'ddf638fa56fb06c1f5ea762f4839336b';
  const API_URL = 'https://api.themoviedb.org/3';
  const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w780';
  
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');
  const [detailsMovie, setDetailsMovie] = useState({});

  const getMovies = async (searchMovie) => {

    const type = searchMovie ? 'search' : 'discover';

    const {data: {results}} = await axios.get(`${API_URL}/${type}/movie?api_key=${API_KEY}&sort_by=popularity.desc`, {
      params: {
        api_key: API_KEY,
        query: searchMovie
      }
    })

    setDetailsMovie(results[0]);
    setMovies(results);
  }

  useEffect( () => {
     getMovies()
   }, [])

  const renderMovies = () => (
    movies.map(movie => (
        <Movie
            key={movie.id}
            movie={movie}
            detailsMovie={setDetailsMovie}
        />
    ))
  )

  const searchMovies = (e) => {
    e.preventDefault();
    getMovies(searchMovie);
  }
     
  return (
    <div className="App">
      <header className={'header'}>
        <div className={'header-content max-center'}> 
          <h1>Movie Cinema App</h1>
            <form onSubmit={searchMovies}>
              <input type='text' onChange={ (e) => setSearchMovie(e.target.value)}/>
              <button type={'submit'}>Type to search...</button>
            </form>
        </div>
      </header>
        
      <div className={'hero'} style={{backgroundImage: `url('${BACKDROP_PATH}${detailsMovie.backdrop_path}')`}}>
        <div className={'hero-content max-center'}>
          <h2 className={'hero-title'}>{detailsMovie.title}</h2>
          {detailsMovie.overview ? <p className={'hero-overview'}> {detailsMovie.overview} </p> : null}
        </div>
      </div>

      <div className='container max-center'>
        {renderMovies()}
      </div>
    </div>
  );
}

export default App;
