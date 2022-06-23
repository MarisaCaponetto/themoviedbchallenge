import React, {useState, useEffect} from 'react';


const SearchBox = (props) => {
    const [searchValue, setSearchValue] = useState([]);

    const getMovieRequestSearch = async () => {
        const url = 'https://api.themoviedb.org/3/search/movie?api_key=ddf638fa56fb06c1f5ea762f4839336b';
    
        const response = await fetch(url);
        const responseJSON = await response.json();
        console.log(responseJSON);
        setSearchValue(responseJSON.results);
        }

    useEffect( () => {
        getMovieRequestSearch();
    }, [searchValue]);
  return (
    <div className='col col-sm-4'>
        <input 
            className='form-control' 
            placeholder='Type to search...'
            onChange={ (event) => setSearchValue(event.target.value)}>

        </input>
    </div>
  )
}

export default SearchBox