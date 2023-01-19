import React, { useState, useEffect } from 'react'
// import { useDispatch } from 'react-redux'

// import { useParams } from 'react-router-dom'

import { comingSoon, inTheaters } from '../apis/imdb'

function Theatres() {
    // const dispatch = useDispatch()
    // let id = useParams()
    const [nowInTheatres, setNowInTheatres] = useState([])
    const [isComingSoon, setIsComingSoon] = useState([])


    async function showingFilms() {
        const showingList = await inTheaters()
        setNowInTheatres(showingList)
    }

    async function upcomingFilms() {
        const allList = await comingSoon()
        setIsComingSoon(allList)
    }

    useEffect(() => {
        showingFilms()
        upcomingFilms()

    }, [])

    return (
        <>
            <section>
                <div>
                    <h1 className='theatre-title'>In Theatres</h1>
                    <div className='media-container'>
                        {nowInTheatres.map((movie, idx) => {
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
                                                    <p><strong>Genre:</strong> {movie?.genres}</p>
                                                    <p><strong>Content Rating:</strong> {movie?.contentRating}</p>
                                                    <p><strong>Rating:</strong> {movie?.imDbRating}/10</p>
                                                    <p><strong>Director:</strong> {movie?.directors}</p>
                                                    <p><strong>Stars:</strong> {movie?.stars}</p>
                                                    <p><strong>Run Time:</strong> {movie?.runtimeStr}</p>
                                                    <p><strong>Year Released:</strong> {movie?.releaseState}</p>
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
            <section>
                <div>
                    <h1 className='coming-title'>Coming Soon</h1>
                    <div className='media-container'>
                        {isComingSoon.map((movie, idx) => {
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
                                                    <p><strong>Genres:</strong>{movie?.genres}</p>
                                                    <p><strong>Relase Date:</strong>{movie?.releaseState}</p>
                                                    <p><strong>Cast:</strong>{movie?.stars}</p>
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

export default Theatres