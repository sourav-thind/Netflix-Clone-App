import axios from './Axios';
import React,{useEffect ,useState}  from 'react'
import "../CSS/Banner.css";
import requests from './Requests';

function Banner () {
const [movie, setmovie] = useState([]);
useEffect(() => {
  async function fetchData(){
    const request = await axios.get(requests.fetchNetflixOriginals);
    setmovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length -1)
    ]
    );
    return request;
  }

  fetchData();
}, [])
console.log(movie);

    function truncate(string, n){
        return string?.length > n ? string.substr(0, n-1) + "..." : string;
    }
  return (
    <header className='banner' style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center"

    }}>
        <div className='banner_contents'>
            <h1 className="banner_title">
              {movie?.original_name || movie?.title || movie?.name}
              </h1>
            <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">MyList</button>
            </div>
            <div className="banner_description">
                {truncate(`${movie?.overview}`,150)};
                </div>
        </div>
        <div className="banner--fadeBottom"/>

    </header>
  )
}

export default Banner