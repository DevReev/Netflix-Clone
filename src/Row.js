import React from 'react'
import { useState, useEffect } from 'react'
import axios from './axios'
import './Row.css'

const baseURL = 'https://image.tmdb.org/t/p/original/'

export default function Row({ title, fetchUrl, isLarge }) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            // console.log('request', request)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

    // console.log('movies', movies)

    return (
        <div className="row">

            <h2>{title}</h2>

            <div className="row_posters">
                {movies.map(movie => (
                    <img className={`row_poster ${isLarge && 'row_posterLarge'}`}
                    key={movie.id} 
                src={`${baseURL}${isLarge? movie.poster_path: movie.backdrop_path}`} 
                alt={movie.title}></img>
                ))}
            </div>
            
        </div>
    )
}
