import React, {useState, useEffect} from 'react'

import "../css/Row.css"
import axios from '../axios.js';


function Row({title, fetchUrl, isLargeRow=false}) {

    const [movies, setMovies] =useState([]);

    const base_url = "http://image.tmdb.org/t/p/original/";

    useEffect(()=>{
        async function fetchData(){
             const request = await axios.get(fetchUrl);
             setMovies(request.data.results);
             return request;
        }

        fetchData();

    }, [fetchUrl]);

    console.log(movies)

  return (
    <div className='row'>
        <h2>{title}</h2>

            <div className='row__posters'>

                {movies.map(movies => (
                    <img className={`row__poster ${isLargeRow && "row__posterLarge"} `}
                    key={movies.id}
                    src={`${base_url}${
                        isLargeRow ? movies.poster_path : movies.backdrop_path
                    }`}  alt='' />
                ))}

            </div>
    </div>
  )
}

export default Row