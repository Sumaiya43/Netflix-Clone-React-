import axios from '../axios.js';
import React, {useState, useEffect} from 'react'
import '../css/Banner.css'
import requests from './../Request';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginal);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
            );
            return requests;
        }

        fetchData();
    }, []);

    console.log(movie);

    function truncate(string, n){
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }

  return (
    <header className='banner' 
    style={{
      backgroundSize: "cover",  
      backgroundImage: `url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundPosition: "center center"
    }}>
    

    <div className='banner__contents'>
        <h1 className='banner__title'>
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner__buttons'>
            <button className='banner__button'>Play</button>
            <button className='banner__button'>My List</button>
        </div>
        <h3 className='banner__description'>{truncate(movie?.overview, 150)}</h3>
    </div>

    <div className='banner__fadeBottom'/>

    </header>
  )
}

export default Banner