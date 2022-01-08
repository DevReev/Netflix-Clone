import React, {useState, useEffect} from 'react'
import axios from './axios'
import requests from './requests'
import './Banner.css'

export default function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending)
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ])
            // console.log(request.data.results[
            //     Math.floor(Math.random() * request.data.results.length)
            // ])
            return request
        }
        fetchData()
    }, [])

    console.log('movies', movie)
    return (
        <header className='banner'
        style={{backgroundSize: 'cover', 
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`}}
        backroundPosition='center center'
        >
            <div className='banner_contents'>
                <h1 className='banner_title'>
                    {movie.title || movie.name || movie.original_name}
                </h1>

                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className="banner_button">My List</button>
                </div>

                <h1 className='banner_description'>
                    {`${String(movie.overview).substring(0, 150)}...`}
                </h1>
            </div>

            <div className='banner--fadeBottom'></div>
        </header>
    )
}
