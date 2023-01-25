import axios from './Axios';
import React, { useState, useEffect } from 'react';
import '../CSS/Row.css';

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setmovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setmovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl])
    const base_url= "https://image.tmdb.org/t/p/original/";
    return (
        <div className='row'>
            <h2>
                {title}
            </h2>
            <div className="row_posters">

            {movies.map((movie)=>
                ((isLargeRow && movie.poster_path) || 
                (!isLargeRow && movie.backdrop_path)) && (

                    <img
                    key={movie.id}
                    className={`row_poster ${isLargeRow &&"row_posterLarge" } `}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name}/>
                )
                
                )
                }
            </div>
        </div>
    )
}

export default Row