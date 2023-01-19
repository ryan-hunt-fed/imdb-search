import React, { useState, useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'

// import { searchMovie, popularMovies } from '../apis/imdb'
import { popularMovies } from '../apis/imdb'


function MovieSearch() {

    // const dispatch = useDispatch()
    // const [getData, setGetData] = useState('')
    // const [recieveData, setRecieveData] = useState([])
    const [topMovies, setTopMovies] = useState([])



    // const searchHandle = async (evt) => {
    //     evt.preventDefault()
    //     const movieSearch = await searchMovie(getData)
    //     setRecieveData(movieSearch)
    //     console.log(recieveData)
    // }

    // const typeHandle = (evt) => {
    //     setGetData(evt.target.value)
    //     console.log('handle', getData)
    // }

    async function topFilms() {
        const topList = await popularMovies()
        setTopMovies(topList)
        console.log(topMovies)
    }

    useEffect(() => {
        // dispatch(popularMovies())
        // topFilms
        // setTopMovies()
        topFilms()

    }, [])

    return (
        <>
            <header className="movie-header">
                <h1>Top Popular Movies</h1>
            </header>

            <section>
                <div>
                    {/* <button onClick={topFilms}>top films</button> */}

                    <div className='media-container'>
                        {topMovies.map((movie, idx) => {
                            return (
                                <>
                                    <div className='media-box'>
                                        <div className='media-items' key={idx}>
                                            <div className='media-image-box'>
                                                <img src={movie?.image} alt={movie?.title} />
                                            </div>
                                            <div className='media-content-box'>
                                                <div className='media-content-box-child'>
                                                    <h2>{movie?.title}</h2>
                                                    <p><strong>Rank:</strong> {movie?.rank}</p>
                                                    <p><strong>Rating:</strong> {movie?.imDbRating}/10</p>
                                                    <p><strong>Crew:</strong> {movie?.crew}</p>
                                                    <p><strong>Year Released:</strong> {movie?.year}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>

        </>
    )
}

export default MovieSearch